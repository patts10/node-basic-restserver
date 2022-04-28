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

  // Verified is mail exist
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    return res.status(400).json({
      msg: 'The email already exist'
    });
  }
  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync( password, salt );

  await user.save();

  res.json({
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