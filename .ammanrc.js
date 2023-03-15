const { LOCALHOST, tmpLedgerDir } = require("@metaplex-foundation/amman");
const mplTokenMetadata = require("@metaplex-foundation/mpl-token-metadata");
const mplAuctionHouse = require("@metaplex-foundation/mpl-auction-house");
const path = require("path");
const MOCK_STORAGE_ID = "js-next-sdk";

function localDeployPath(programName) {
  return path.join(__dirname, "programs", `${programName}.so`);
}

const programs = [
  {
    label: "Token Metadata",
    programId: mplTokenMetadata.PROGRAM_ADDRESS,
    deployPath: localDeployPath("mpl_token_metadata"),
  },
  {
    label: "Auction House",
    programId: mplAuctionHouse.PROGRAM_ADDRESS,
    deployPath: localDeployPath("mpl_auction_house"),
  },
  {
    label: "Gateway",
    programId: "gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs",
    deployPath: localDeployPath("solana_gateway_program"),
  },
  {
    label: "Token Auth Rules",
    programId: "auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg",
    deployPath: localDeployPath("mpl_token_auth_rules"),
  },
  {
    lable: "Squads V3 MPL",
    programId: "SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu",
    deployPath: localDeployPath("squads_mpl"),
  },
  {
    lable: "Squads Program Manager",
    programId: "SMPLKTQhrgo22hFCVq2VGX1KAktTWjeizkhrdB1eauK",
    deployPath: localDeployPath("program_manager"),
  },
  {
    lable: "Squads Roles",
    programId: "SMPLvKJwsyNGD6xf7Ph6VRpDGPa3DXV4uPHcTAnXe6r",
    deployPath: localDeployPath("roles"),
  },
  {
    lable: "Squads TXMeta",
    programId: "SMPL5bz5ERMdweouWrXtk3jmb6FnjZkWf7pHDsE6Zwz",
    deployPath: localDeployPath("txmeta"),
  },
  {
    lable: "Squads Validator",
    programId: "SMPLbiNbsa19gf9jz8x9uHSvSn9VLFJB38dGy46kqJ7",
    deployPath: localDeployPath("validator"),
  },
];

module.exports = {
  validator: {
    killRunningValidators: true,
    programs,
    jsonRpcUrl: "http://0.0.0.0:8899",
    websocketUrl: "0.0.0.0:8900",
    commitment: "confirmed",
    ledgerDir: "/tmp/validator/ledger",
    resetLedger: false,
    verifyFees: false,
  },
  relay: {
    accountProviders: {
      ...mplTokenMetadata.accountProviders,
    },
  },
  storage: {
    storageId: MOCK_STORAGE_ID,
    clearOnStart: false,
  },
  snapshot: {
    snapshotFolder: "/tmp/validator/snapshots",
  },
};
