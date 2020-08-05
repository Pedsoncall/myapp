FROM node:14.5.0-alpine3.10

COPY . /app/app
#RUN mkdir /usr/src/app
WORKDIR /app/app
RUN npm install -g @angular/cli
RUN npm install ngx-cookie-service --save
RUN ng add @clr/angular
CMD ng serve --host 0.0.0.0 --port 4500




