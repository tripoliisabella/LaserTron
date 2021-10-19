FROM node:10
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g localtunnel

COPY . .

EXPOSE 8080
CMD ["node", "app.js"]
