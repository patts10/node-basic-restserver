const Role = require('../models/role');

const isValidRole = async(role = '') => {

  const existRole = await Role.findOne({ role });
  console.log(role);
  console.log(existRole);
  if ( !existRole ) {
      throw new Error(`The role ${ role } does not exist in the database`);
  }
}

module.exports = {
  isValidRole
}