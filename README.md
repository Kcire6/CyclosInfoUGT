CLIENTE CYCLOS 4 UI - ANGULAR 


Cliente de Cyclos con conexion a la cuenta de desarrollo de InfoUtility. 


Descripcion ambiente de desarrollo: 

Node Js: Version 12.16.1
Angular: 9.0.6 
OS: Windows 10 64x 

Esta version ya incluye las dependencias y modulos necesarios para su implementacion, asi como la conexion con el backend de desarrollo de InfoUtility. 

Link Dashboard admin/user:
https://communities.cyclos.org/chilin#home

Link Api backend:
https://communities.cyclos.org/chilin/api/

Para la conexion con el backend fueron necesarias modificaciones en los siguientes documentos:

---- /src/app/ui/setup.ts ----

export function setup() {
  Configuration.apiRoot = '/api/'; <-- api principal del backend 
  Configuration.appTitle = 'chilin'; <-- nombre de la aplicacion en el backend.
  Configuration.appTitleSmall = 'Cyclos';
  Configuration.appTitleMenu = 'Cyclos menu';
}


//Se configuro el proxy para evitar el conflicto de CORS
---- /proxy.json ----

{
  "/api/*": { 
    "target": "https://communities.cyclos.org/chilin", <-- Direccion del backend 
    "secure": false,
    "changeOrigin": true
  }
}

Una vez realizadas las configuraciones para la conexion con el backend. 

Se debe iniciar la aplicacion con el comando npm start (no utilizar ng serve)


EN CASO DE TENER DIFICULTADES INICIALIZANDO ESTA VERSION, UTILIZAR VERSION EN REPOSITORIO. 

https://github.com/cyclosproject/cyclos4-ui

SEGUIR LOS PASOS:

1)  git clone https://github.com/cyclosproject/cyclos4-ui.git
    cd cyclos4-ui

2) npm install

3) npm run generate

4) REALIZAR LOS CAMBIOS EN LOS DOCUMENTOS DESCRITOS EN LA PARTE SUPERIOR. 

5) npm start
