# 1- Backend nodejs

## Http
* Client (frontend)
* Http
    * Request (front)
    * Response (back)
    * Version
    * Http server (+version)
* Serveur (backend)
    * Langage/Fw backend
    * Fonctionnement du backend: 
        * Bdd, service (autres sources de données)...
        * Traitement de données, image, pdf, fichier...
        * Toutes les possibilités

## NodeJs
* (vs) php, web server, event loop
* Spécificité de NodeJs
    * single process
    * !! Traitement bloquant et données partagés (variable globale...)
    * Possibilité cluster/workers
* LC
    * Création serveur
        * http 1
        * http 2 + creation certificat (! linux)
    * event loop
        * ! pas de bloquage
        * ! pas de coupure
    * cluster
        * processus
        * ! pas de partage de données (mémoire)
    * request / response
        * req route
        * resp header, cors...
        * resp type
    * API
        * Header
        * Methode (GET, POST...)
        * Path
## TODO
* Routing


# 2- Suite http server

## Response body
* JSON (stringify): content type: application/json
* Promise
    * image (readFile): content type: image/...
    * pdf (readFile): content type: application/pdf
    * then vs async
    * gestion erreur
* html: content type: text/html

## Http verb (method)
* Get, Post, Patch, Put/Delete
* query parameters
    * TODO: post form, upload file

## Statut http
cf   
[https://developer.mozilla.org/fr/docs/Web/HTTP/Status](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)    
[https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
    
## Gestion erreur
* Promise
* Sync
* Custom error
