# Configura la imagen base de Node.js 16 en Alpine
FROM node:16-alpine AS build

# Configura el directorio de trabajo dentro de la imagen
WORKDIR /app

# Copia los archivos necesarios a la imagen
COPY package*.json ./
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Compila la aplicación de NestJS
RUN npm run build

# Configura la imagen base de Node.js 16 en Alpine
FROM node:16-alpine

# Configura el directorio de trabajo dentro de la imagen
WORKDIR /app

# Copia los archivos necesarios a la imagen
COPY package*.json ./

# Instala las dependencias de producción de la aplicación
RUN npm install --omit=dev

# Copia los archivos compilados de la aplicación NestJS desde la imagen anterior
COPY --from=build /app/dist ./dist

# Exponer el puerto 3000 para acceder a la aplicación
EXPOSE 3001

# Comando que se ejecuta al iniciar la imagen
CMD ["npm", "run", "start:prod"]
