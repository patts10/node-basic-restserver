const path = require('path');
const fs   = require('fs');

const { response } = require('express');
const { loadFile } = require('../helpers');

const { User, Product } = require('../models');

const saveFile = async(req, res = response) => {

    try {
        const name = await loadFile( req.files, undefined, 'imgs' );
        res.json({ name });
    } catch (msg) {
        res.status(400).json({ msg });
    }
}

const updateImage = async(req, res) => {

  const { id, collection } = req.params;

  let model;

  switch ( collection ) {
    case 'users':
      model = await User.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `It does not exist user with id ${ id }`
        });
      }

      break;

    case 'products':
      model = await Product.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `It does not exist product with id ${ id }`
        });
      }

      break;
  
    default:
      res.status(500).json({
        msg: 'I forgot to validate this! :-)'
      });
  }

  if (model.img) {
    const pathImg = path.join(__dirname, '../uploads', collection, model.img);
    if (fs.existsSync(pathImg)) {
      fs.unlinkSync(pathImg);
    }
  }


  const name = await loadFile( req.files, undefined, collection );
  model.img = name;

  await model.save();
  
  res.json( model );
}

const showImage = async(req, res = response) => {

  const { id, collection } = req.params;

  let model;

  switch ( collection ) {
    case 'users':
      model = await User.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `It does not exist user with id ${ id }`
        });
      }

      break;

    case 'products':
      model = await Product.findById(id);
      if (!model) {
        return res.status(400).json({
          msg: `It does not exist product with id ${ id }`
        });
      }

      break;
  
    default:
      res.status(500).json({
        msg: 'I forgot to validate this! :-)'
      });
  }

  if (model.img) {
    const pathImg = path.join(__dirname, '../uploads', collection, model.img);
    if(fs.existsSync(pathImg)) {
      return res.sendFile( pathImg );
    }
  }
  
  const placeholderPath = path.join(__dirname, '../assets/no-image.jpg')
  res.sendFile(placeholderPath);
}

module.exports = {
  saveFile,
  updateImage,
  showImage
}