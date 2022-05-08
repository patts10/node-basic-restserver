const { Category } = require('../models');
const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async(role = '') => {

  const existRole = await Role.findOne({ role });
  if ( !existRole ) {
    throw new Error(`The role ${ role } does not exist in the database`);
  }
}

const isValidEmail = async(email = '') => {
  const existEmail = await User.findOne({ email });
  if ( existEmail ) {
    throw new Error(`The email ${ email }  exists in the database`);
  }
}

const existUserById = async(id = '') => {
  const existUser = await User.findById(id);
  if ( !existUser ) {
    throw new Error(`The user with id ${ id } does not exist in the database`);
  }
}

const existCategoryById = async(id = '') => {
  const existCategory = await Category.findById(id);
  if (!existCategory) {
    throw new Error(`The category with id ${ id } does not exist in the database`);    
  }
}

module.exports = {
  isValidRole,
  isValidEmail,
  existUserById,
  existCategoryById
}