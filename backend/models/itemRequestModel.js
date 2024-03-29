const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemRequestSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		requesterName: {
			type: String,
			required: true,
		},
		phoneNo: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("ItemRequest", itemRequestSchema);
