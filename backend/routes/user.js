const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	getUser,
	getUsers,
} = require("../controllers/userController");

const user = express.Router();

// login route
user.post("/login", loginUser);

// signup route
user.post("/signup", signupUser);

// get a specific user route
user.get("/all", getUsers);

// get a specific user route
user.get("/logged-in-user", getUser);

module.exports = user;
