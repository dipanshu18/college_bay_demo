const Item = require("../models/itemPostModel");
const Request = require("../models/itemRequestModel");
const mongoose = require("mongoose");

// GET all items
const getItems = async (req, res) => {
	const items = await Item.find({}).sort({ createdAt: -1 });
	res.status(200).json(items);
};

// GET all user items
const getUserItems = async (req, res) => {
	const user_id = req.user._id;
	const items = await Item.find({ user_id }).sort({ createdAt: -1 });
	res.status(200).json(items);
};

// CREATE a new item
const createItemPost = async (req, res) => {
	const user_id = req.user._id;
	const { title, price, ownerName, phoneNo, location } = req.body;

	// ADD Doc to DB
	try {
		const item = await Item.create({
			title,
			price,
			ownerName,
			phoneNo,
			location,
			user_id,
		});
		res.status(200).json(item);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// DELETE a item
const deleteItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such item" });
	}

	const item = await Item.findOneAndDelete({ _id: id });

	if (!item) {
		return res.status(400).json({ error: "No such item" });
	}

	res.status(200).json(item);
};

// GET all requests
const getRequests = async (req, res) => {
	const requests = await Request.find({}).sort({ createdAt: -1 });
	res.status(200).json(requests);
};

// GET all user requests
const getUserRequests = async (req, res) => {
	const user_id = req.user._id;
	const requests = await Request.find({ user_id }).sort({ createdAt: -1 });
	res.status(200).json(requests);
};

// CREATE a new request
const createItemRequest = async (req, res) => {
	const user_id = req.user._id;
	const { title, requesterName, phoneNo } = req.body;

	// ADD Doc to DB
	try {
		const request = await Request.create({
			title,
			requesterName,
			phoneNo,
			user_id,
		});
		res.status(200).json(request);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// DELETE a request
const deleteRequest = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such request" });
	}

	const request = await Request.findOneAndDelete({ _id: id });

	if (!request) {
		return res.status(400).json({ error: "No such request" });
	}

	res.status(200).json(request);
};

module.exports = {
	createItemPost,
	getItems,
	getUserItems,
	deleteItem,
	createItemRequest,
	getRequests,
	getUserRequests,
	deleteRequest,
};
