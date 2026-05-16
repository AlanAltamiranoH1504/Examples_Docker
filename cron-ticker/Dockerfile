# Partimos de imagen base
FROM node:19.2-alpine3.16

# Nos movemos al directorio app (cd /app)
WORKDIR /app

# Copiamos los archivos de la aplicacion (Los primeros dos son los archivos que copia, el tercero el destino del WORKDIR)
COPY index.js package.json ./

# Instalacion de dependencias de package.json
RUN npm install

# Copiamos el resto de los archivos de la app
COPY . .

# Corremos la aplicacion
CMD [ "npm", "run", "dev"]