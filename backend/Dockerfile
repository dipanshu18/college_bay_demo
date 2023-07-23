FROM node:18
WORKDIR /usr/collegebay/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]