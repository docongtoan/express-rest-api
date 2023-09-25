FROM node:16

WORKDIR /app

EXPOSE 300

COPY . .

RUN npm install

CMD ["npm", "start"]

