const { LOCALHOST, tmpLedgerDir } = require('@metaplex-foundation/amman');
const mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
const mplAuctionHouse = require('@metaplex-foundation/mpl-auction-house');
const path = require('path');
const MOCK_STORAGE_ID = 'js-next-sdk';

function localDeployPath(programName) {
  return path.join(__dirname, 'programs', `${programName}.so`);
}

const programs = [
  {
    label: 'Token Metadata',
    programId: mplTokenMetadata.PROGRAM_ADDRESS,
    deployPath: localDeployPath('mpl_token_metadata'),
  },
  {
    label: 'Auction House',
    programId: mplAuctionHouse.PROGRAM_ADDRESS,
    deployPath: localDeployPath('mpl_auction_house'),
  },
  {
    label: 'Gateway',
    programId: 'gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs',
    deployPath: localDeployPath('solana_gateway_program'),
  },
  {
    label: 'Token Auth Rules',
    programId: 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
    deployPath: localDeployPath('mpl_token_auth_rules'),
  },
];

module.exports = {
  validator: {
    killRunningValidators: true,
    programs,
    jsonRpcUrl: 'http://0.0.0.0:8899',
    websocketUrl: '0.0.0.0:8900',
    commitment: 'confirmed',
    ledgerDir: tmpLedgerDir(),
    resetLedger: true,
    verifyFees: false,
  },
  relay: {
    accountProviders: {
      ...mplTokenMetadata.accountProviders,
    },
  },
  storage: {
    storageId: MOCK_STORAGE_ID,
    clearOnStart: true,
  },
  snapshot: {
    snapshotFolder: path.join(__dirname, 'snapshots'),
  },
};
