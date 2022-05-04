const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');

const usersGet = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: "get API - controller",
    query
  });
}

const usersPost = async( req = request, res = response ) => {

  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync( password, salt );

  await user.save();

  res.json({
    user
  });
}

const usersPut = async(req, res) => {

  const id = req.params.id;
  const { _id, password, google, email, ...rest } = req.body;

  if ( password ) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync( password, salt );
  }

  const user = await User.findByIdAndUpdate( id, rest );
  console.log(user);
  console.log(rest);
  res.json({
    msg: "put API - controller",
    user
  });
}

const usersPatch = (req, res) => {
  res.json({
    msg: "patch API - controller",
  });
}

const usersDelete = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
}



module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete
}