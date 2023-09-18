// Este archivo lo unico que hace es iniciar el servidor, ya que toda las configuraciones necesarias se lo hacen en el archivo server

const Server = require('./models/server');

const server = new Server();

server.start();