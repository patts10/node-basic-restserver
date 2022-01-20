const { response, request } = require('express');

const userGet = (req = request, res = response) => {

  const query = req.query;

  res.json({
    msg: "get API - controller",
    query
  });
}

const userPost = (req, res) => {

  const body = req.body;

  res.json({
    msg: "post API - controller",
    body
  });
}

const userPut = (req, res) => {

  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id
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