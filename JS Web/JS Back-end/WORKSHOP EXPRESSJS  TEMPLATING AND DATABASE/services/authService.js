const User = require("../models/schemes/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const { SALT_REGISTER, SECRET_JWT } = require("../config/start").dev;

async function register(userData) {
    if (userData.username == "") {
        throw { message: "Username cannot be empty string!" }
    }

    if (userData.username[0].charCodeAt(0) < 97 || userData.username[0].charCodeAt(0) > 122) {
        throw { message: "Username cannot be upper case later or charecter!" }
    }

    if (userData.password.length < 4) {
        throw { message: "Password must be at least 4 charecters long!" }
    }

    if (userData.repeatPassword !== userData.password) {
        throw { message: "Password and Repeat Password must be identical!" }
    }

    let user = await User.findOne({ username: userData.username });

    if (user) {
        throw { message: "This username exist" }
    }


    const salt = await bcrypt.genSaltSync(SALT_REGISTER);
    const passwordHash = await bcrypt.hashSync(userData.password, salt);
    let userObj = new User({ username: userData.username, password: passwordHash })
    return userObj.save();
}

async function login(userData) {
    if (userData.username == "") {
        throw { message: "Username cannot be empty string!" }
    }

    if (userData.username[0].charCodeAt(0) < 97 || userData.username[0].charCodeAt(0) > 122) {
        throw { message: "Username cannot be upper case later or charecter!" }
    }

    if (userData.password.length < 4) {
        throw { message: "Password must be at least 4 charecters long!" }
    }

    let user = await User.findOne({ username: userData.username });

    if (!user) {
        throw { message: "Invalid username or password" }
    }

    const match = await bcrypt.compare(userData.password, user.password);

    if (match) {
        return jwt.sign({ "_id": user._id, user: user.username }, SECRET_JWT); 
    } else {
        throw { message: "Invalid username or password" }
    }

}

module.exports = {
    register,
    login
}