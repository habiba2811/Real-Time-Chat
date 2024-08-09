
FROM node:20


WORKDIR /app


COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 5000


CMD ["npm", "start"]
