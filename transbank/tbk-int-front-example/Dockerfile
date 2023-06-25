# Configura la imagen base en stage "build"
FROM node:16-alpine as buildstage

# Configura el directorio de trabajo dentro de la imagen
WORKDIR /app/tmp

# Copia los archivos necesarios a la imagen
COPY package*.json .
COPY angular.json .
COPY tsconfig.json .
COPY tsconfig.app.json . 
COPY src ./src

# add node_module to docker cache layer (faster build)
COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json

# Instala las dependencias de la aplicación
RUN npm install

# Compila la aplicación de Angular para producción
RUN npm run build --omit=dev

# Configura la imagen base de nginx
FROM nginx:alpine

# Copia los archivos compilados de la app
COPY --from=buildstage /app/tmp/dist/tbk-int-front-example /usr/share/nginx/html

# # Copia el archivo de configuración de nginx personalizado a la imagen
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/

# # Expone el puerto 4200 para acceder a la app
EXPOSE 4200

# Comando que se ejecuta al iniciar la imagen
CMD ["nginx", "-g", "daemon off;"]
