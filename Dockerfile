FROM node:22-alpine

WORKDIR /var/www/html

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT ["/var/www/html/entrypoint.sh"]
CMD ["npm", "start"]