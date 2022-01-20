const express = require('express');
const cors = require('cors');

class Server {
  
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users';

    //Middlewares
    this.middlewares();
    
    //Routes
    this.routes();
  }
  
  middlewares() {
    //Cors
    this.app.use(cors());
    
    //Public directory
    this.app.use( express.static('public'));
  }

  routes() {

    this.app.use(this.userPath, require('../routes/user.js'));
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Server is running at port: ', this.port );
    } );
  }

}


module.exports = Server;