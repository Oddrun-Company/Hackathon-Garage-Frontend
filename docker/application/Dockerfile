FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

# Fix permissions for packages
RUN npm config set unsafe-perm true

RUN npm install

COPY . ./

RUN chown -R node:node /app/node_modules

# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]