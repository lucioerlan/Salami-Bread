FROM node:16.3.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
