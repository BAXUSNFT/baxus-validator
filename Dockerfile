FROM node:16
WORKDIR /baxus-validator
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY solana-release solana-release
RUN export PATH=./solana-release/bin:$PATH

COPY node_modules node_modules
COPY programs programs
COPY .ammanrc.js .ammanrc.js

EXPOSE 3000
CMD [ "npm", "run", "amman:start" ]