FROM node:alpine

ENV NODE_ENV=production
ENV HOST 0.0.0.0 

WORKDIR /app

RUN npm install --global pm2

COPY ./ ./

RUN npm install --production && npm run build

EXPOSE 3000

USER node:alpine

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
