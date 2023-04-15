const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		phoneNo: {
			type: Number,
			required: true,
		},
		college: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

userSchema.statics.signup = async function (
	email,
	password,
	fullName,
	phoneNo,
	college
) {
	// validation
	if (!email || !password || !fullName || !phoneNo || !college) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}

	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already in use");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({
		email,
		password: hash,
		fullName,
		phoneNo,
		college,
	});

	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });
	if (!user) {
		throw Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

module.exports = mongoose.model("User", userSchema);
