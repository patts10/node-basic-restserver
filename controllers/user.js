const { response } = require('express');

const userGet = (req, res = response) => {

  res.json({
    msg: "get API - controller",
  });
}

const userPost = (req, res) => {
  res.json({
    msg: "post API - controller",
  });
}

const userPut = (req, res) => {
  res.json({
    msg: "put API - controller",
  });
}

const userPatch = (req, res) => {
  res.json({
    msg: "patch API - controller",
  });
}

const userDelete = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
}



module.exports = {
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete
}