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
		ownerName: {
			type: String,
			required: true,
		},
		phoneNo: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("ItemPost", itemPostSchema);
