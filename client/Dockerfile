
FROM node:latest AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install  @angular/cli@latest

COPY . .

CMD npm start


# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install

# RUN npm run build --prod


# # Stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/client /usr/share/nginx/html
