const { response, request } = require('express');

const User = require('../models/user');

const usersGet = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: "get API - controller",
    query
  });
}

const usersPost = async( req, res ) => {

  // const { name, email, password, rol } = req.body;
  // const user = new User({ name, email, password, rol });
  const body = req.body;
  const user = new User(body);

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