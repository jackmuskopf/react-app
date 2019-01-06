FROM node:latest

# RUN apt-get update && apt-get -y install vim

# Create app directory
WORKDIR /usr/src/app

RUN git clone --single-branch --branch upload-something https://github.com/jackmuskopf/react-app.git .

RUN npm install


EXPOSE 8080


CMD [ "npm", "start" ]