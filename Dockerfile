FROM node:18

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
RUN npm install -g npm
RUN npm install
RUN npm install -g nodemon

# Bundle app source
#COPY index.js ./

# Exports
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
