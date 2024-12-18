FROM node:20.10-alpine

WORKDIR /keystone

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]