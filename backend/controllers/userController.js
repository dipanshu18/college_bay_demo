const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);

		// create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// signup a user
const signupUser = async (req, res) => {
	const { email, password, fullName, phoneNo, college } = req.body;

	try {
		const user = await User.signup(email, password, fullName, phoneNo, college);

		// create a token
		const token = createToken(user._id);

		res.status(200).json({ email, token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// GET a specific user
const getUser = async (req, res) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ message: "User not found" });
	}
};

// GET all users
const getUsers = async (req, res) => {
	const users = await User.find({});
	res.status(200).json(users);
};

module.exports = {
	signupUser,
	loginUser,
	getUser,
	getUsers,
};
