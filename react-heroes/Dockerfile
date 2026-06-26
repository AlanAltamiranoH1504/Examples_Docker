
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

# FROM node:19-alpine3.15 as prod-deps
# WORKDIR /app
# COPY package.json package.json
# RUN yarn install --prod --frozen-lockfile


# ! MONTAMOS LA APLICACION EN UN SERVIDOR DE NGINX
FROM nginx:1.23.3 as prod
EXPOSE 80
# ! COPIAMOS LA CARPETA DE DIST DENTRO DE LA CARPETA DE NGINX
COPY --from=builder /app/dist /usr/share/nginx/html 
COPY assets/ /usr/share/nginx/html/assets

# ! COPIAMOS LA NUEVA CONFIGURACION DE NGINX LOCAL A LA DEL CONTENEDOR
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]
