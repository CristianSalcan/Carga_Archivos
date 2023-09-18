const express = require('express');
const fileUpload = require('express-fileupload'); // Importamos la libreria de carga de archivos
const routesFiles = require('../routes/rutaArchivos'); // Importamos las rutas

class Server {
    constructor() {
        this.app = express();
        this.app.use(fileUpload()); // Aqui puedes configurar varios cosas como el peso del archivo maximo que se permite
        this.port = 5000;
        this.paths = {
            files: '/api/archivos',
        };
        this.iniciarRutas();
    }

    iniciarRutas() {

        // Ruta de ejemplo 
        // this.app.get('/', (req, res) => {
        //     res.send('¡Hola, mundo!');
        // });

        this.app.use(this.paths.files, routesFiles);

        // Agregar más rutas aquí según sea necesario
    }

    // Iniciamos el servidor
    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

module.exports = Server;