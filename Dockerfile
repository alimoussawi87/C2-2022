FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/plaintesang /usr/share/nginx/html
