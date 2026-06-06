## Node Image from docker hub ##
FROM node:24-alpine

## Environment vairables for DB ##
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=secret

## Create app directory ##
RUN mkdir -p /home/app

## Copy project files in container ##
COPY . /home/app

##  Run the application ##
CMD ["node", "/home/app/server.js"]



