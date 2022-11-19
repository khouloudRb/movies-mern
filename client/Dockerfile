FROM node:10.14.2 AS node
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD npm start