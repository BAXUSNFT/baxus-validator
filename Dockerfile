FROM solanalabs/solana:stable
RUN apt update && apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install nodejs
WORKDIR /baxus-validator
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY programs programs
COPY .ammanrc.js .ammanrc.js

EXPOSE 8900
EXPOSE 8899
ENTRYPOINT [ "npm", "run", "amman:start" ]