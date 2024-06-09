FROM node:22-alpine3.18

WORKDIR / my-app

COPY . / my-app/

RUN npm install 

EXPOSE 3000

CMD ["npm", "run", "start"]
