const { response } = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const { generateJWT } = require("../helpers/generate-jwt");


const login = async(req, res = response) => {

  const { email, password } = req.body;
  
  try {
    //Search user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "user/password incorrect - email"
      });
    }

    if (!user.state) {
      return res.status(400).json({
        msg: "user/password incorrect - state false"
      });
    }

    const isValidPasword = bcryptjs.compareSync(password, user.password);
    if (!isValidPasword) {
      return res.status(400).json({
        msg: "user/password incorrect - password"
      });
    }

    //Generate JWT
    const token = await generateJWT(user.id);

    res.json({
      user,
      token
    });
    
  } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Get on to admin",
      });
  }
}

module.exports = {
  login,
};