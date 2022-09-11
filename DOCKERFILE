FROM nginx:stable-alpine
COPY dist/invoice-front /usr/share/nginx/html

