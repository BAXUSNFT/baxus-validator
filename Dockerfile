FROM baxusco/baxus-validator as node_builder
WORKDIR /baxus-validator
COPY package.json .
COPY package-lock.json .
RUN npm install

FROM node:16
WORKDIR /baxus-validator
COPY --from=node_builder /baxus-validator/node_modules /baxus-validator/node_modules
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.14.13/install)"
RUN  cp -r /root/.local/share/solana/install/active_release/bin/* /usr/local/bin
COPY node_modules node_modules
COPY programs programs
COPY .ammanrc.js .ammanrc.js
COPY package.json package.json
COPY package-lock.json package-lock.json

EXPOSE 8900
EXPOSE 8899
CMD [ "npm", "run", "amman:start" ]