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

const usersPost = async( req, res ) => {

  const { name, email, password, rol } = req.body;
  const user = new User({ name, email, password, rol });


  //Encrypt password
  const salt = await bcryptjs.genSalt();
  user.password = await bcryptjs.hash( password, salt );

  await user.save();

  res.json({
    msg: "post API - controller",
    user
  });
}

const usersPut = (req, res) => {

  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id
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