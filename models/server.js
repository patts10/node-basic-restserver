const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../controllers/config.js');

class Server {
  
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = '/api/users';

    //Connect to database
    this.connectDB();


    //Middlewares
    this.middlewares();
    
    //Routes
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }
  
  middlewares() {
    //Cors
    this.app.use(cors());

    //Read and pase of body
    this.app.use( express.json() )
    
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