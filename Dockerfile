FROM node:8

MAINTAINER polo

WORKDIR /src/egg-server
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

EXPOSE 7001

CMD ["npm", "run dev"]
