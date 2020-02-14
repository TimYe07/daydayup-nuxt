FROM node:alpine

ENV NODE_ENV=production
ENV HOST 0.0.0.0 

WORKDIR /app

COPY ./ ./

EXPOSE 3000

RUN npm install

RUN npm run build

CMD ["npm", "start"]
