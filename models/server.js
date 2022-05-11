const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.js');

class Server {
  
  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth : '/api/auth',
      categories : '/api/categories',
      products : '/api/products',
      search : '/api/search',
      users : '/api/users'
    }

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

    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.categories, require('../routes/categories'));
    this.app.use(this.paths.products, require('../routes/products.js'));
    this.app.use(this.paths.search, require('../routes/search.js'));
    this.app.use(this.paths.users, require('../routes/users'));
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Server is running at port: ', this.port );
    } );
  }

}


module.exports = Server;