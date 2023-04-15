const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemPostSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		owner: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		productDescription: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("ItemPost", itemPostSchema);
