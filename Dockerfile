FROM node:22-alpine

WORKDIR /var/www/html

COPY . .
RUN chmod +x /var/www/html/entrypoint.sh

RUN npm install
RUN npm run build

ENTRYPOINT ["/var/www/html/entrypoint.sh"]
CMD ["npm", "start"]