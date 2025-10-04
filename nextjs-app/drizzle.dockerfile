FROM node:22.19.0-alpine3.22

WORKDIR /migrate

COPY . .

RUN npm install --frozen-lockfile

CMD ["npm", "run", "migrate"]