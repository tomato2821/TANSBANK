# Ejemplo transbank

Este proyecto contiene 2 aplicaciones (front y back) que permiten generar un flujo completo de compra usando la plataforma transbank.

Tarjetas de pruebas: https://www.transbankdevelopers.cl/documentacion/como_empezar#tarjetas-de-prueba

## Ejecutar
Para poder ejecutar localmente este proyecto se requiere de Docker y Docker compose instalado en el sistema.    

Cómo instalar docker: 
    https://docs.docker.com/engine/install/ 
    https://www.bundleapps.io/blog/docker-series/pt-1-installing-docker-and-docker-compose

Como instalar docker y docker compose en windows: https://www.elchecibernetico.com/aplicaciones/instalar-docker-y-docker-compose-en-windows-10

Ademas, se debe crear un archivo llamado `.env` dentro de la carpeta `/tbk-int-back-example` con el siguiente contenido: 

`````
TBK_BASE_URL=https://webpay3gint.transbank.cl
TBK_API_KEY= //copiar API key desde pagina de transbank (codigo de comercio de Webpay Plus)
TBK_API_SECRET= //copiar secreto desde pagina de transbank (api secret que comienza con 579B....)
`````

Credenciales de pruebas: https://www.transbankdevelopers.cl/documentacion/como_empezar#codigos-de-comercio


Una vez tengas instalado docker, docker compose y las credenciales configuradas; basta con ejecutar el siguiente comando para correr ambas aplicaciones: 

````bash
/transbank$ docker-compose up --build
````

Esto levantara ambas aplicaciones en los siguientes puertos: 

`````bash
Creating tbk-backend  ... done
Creating tbk-frontend ... done
Attaching to tbk-backend, tbk-frontend
tbk-frontend   | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
tbk-frontend   | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
tbk-frontend   | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
tbk-frontend   | 10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
tbk-frontend   | 10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
tbk-frontend   | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
tbk-frontend   | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
tbk-frontend   | /docker-entrypoint.sh: Configuration complete; ready for start up
tbk-backend    | 
tbk-backend    | > tbk-int-back-example@0.0.1 start:prod
tbk-backend    | > node dist/main
tbk-backend    | 
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [NestFactory] Starting Nest application...
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] LoggerModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] HttpModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] TbkApiModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] ProductosModule dependencies initialized +0ms
tbk-backend    | [Nest] 17  - 04/27/2023, 9:26:56 PM     LOG [InstanceLoader] ApiProductosModule dependencies initialized +0ms
`````
**App Web (front)**: 4200 -> http://localhost:4200   
**API Rest (back)**: 3001 -> http://localhost:3001

# Stack

- El proyecto `tbk-int-front` es una aplicación web desarrollada utilizando el framework Angular 12 (Typescript).
- El proyecto `tbk-int-back` es un servicio web REST desarrollado en nodeJS utilizando el framework NestJS (Typescript)
- Para ejecutar la app web local se utilizo el servidor web `Nginx`
