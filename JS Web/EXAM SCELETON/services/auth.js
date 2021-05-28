const User = require("../schemes/User");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config");


async function register(registerData) {
    if (registerData.username == "" || registerData.password == "") {
        throw { message: "All fields are requred" }
    }

    if (registerData.username.length < 5) {
        throw { message: "Username should be at least 5 characters long!" }
    }


    if (registerData.password.length < 8) {
        throw { message: "Password should be at least 8 characters long" }
    }

    if (registerData.repeatPassword !== registerData.password) {
        throw { message: "Password and Repeat Password must be identical!" }
    }

    let user = await User.findOne({ username: registerData.username });

    if (user) {
        throw { message: "This username exist" }
    }

    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(registerData.password.trim(), salt);
    const userObj = new User({username: registerData.username.trim(), password: hash});
    return userObj.save()
}

module.exports = {
    register
}