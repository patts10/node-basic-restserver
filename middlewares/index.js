
const checkFields = require("../middlewares/check-fields");
const validateJWT = require("../middlewares/validate-jwt");
const validateRoles = require("../middlewares/validate-roles");

module.exports = {
  ...checkFields,
  ...validateJWT,
  ...validateRoles
}