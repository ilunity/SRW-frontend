# syntax=docker/dockerfile:1

FROM node:14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json /usr/src/app/
RUN npm ci
EXPOSE ${PORT}

ENV NEXT_PUBLIC_HOST ${NEXT_PUBLIC_HOST}
ENV NEXT_CLIENT_HOST ${NEXT_CLIENT_HOST}

RUN npm run build
CMD ["npm", "start"]
