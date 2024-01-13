FROM node:20.10-bookworm

WORKDIR /stredsearch-frontend

COPY package.json ./
COPY public/ public/
COPY src/ src/

RUN npm install -g npm@10.1.0

RUN apt-get update && apt-get install -y python3 make g++
RUN npm install --save-dev react-lottie --legacy-peer-deps

RUN npm install --legacy-peer-deps

EXPOSE 80

CMD ["npm", "start"]