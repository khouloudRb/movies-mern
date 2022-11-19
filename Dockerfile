FROM node:10.14.2 AS node
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3001
CMD node server.js