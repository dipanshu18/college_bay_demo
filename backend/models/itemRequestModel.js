const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemRequestSchema = new Schema(
	{
		title: {
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

module.exports = mongoose.model("ItemRequest", itemRequestSchema);
