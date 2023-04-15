const Item = require("../models/itemPostModel");
const Request = require("../models/itemRequestModel");
const mongoose = require("mongoose");

// GET all items
const getItems = async (req, res) => {
	const items = await Item.find({}).sort({ createdAt: -1 });
	res.status(200).json(items);
};

//  GET a single item
const getItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such item" });
	}

	const item = await Item.findById(id);
	if (!item) {
		return res.status(404).json({ error: "No such item" });
	}
	res.status(200).json(item);
};

// CREATE a new item
const createItemPost = async (req, res) => {
	const { title, price, owner, location, productDescription } = req.body;

	// ADD Doc to DB
	try {
		const item = await Item.create({
			title,
			price,
			owner,
			location,
			productDescription,
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

// UPDATE an item
const updateItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such item" });
	}

	const item = await Item.findOneAndUpdate({ _id: id }, { ...req.body });

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

//  GET a single request
const getRequest = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such request" });
	}

	const request = await Request.findById(id);
	if (!request) {
		return res.status(404).json({ error: "No such request" });
	}
	res.status(200).json(request);
};

// CREATE a new request
const createItemRequest = async (req, res) => {
	const { title, productDescription, upvotes } = req.body;

	// ADD Doc to DB
	try {
		const request = await Request.create({
			title,
			productDescription,
			upvotes,
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

// UPDATE a request
const updateRequest = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such request" });
	}

	const request = await Request.findOneAndUpdate({ _id: id }, { ...req.body });

	if (!request) {
		return res.status(400).json({ error: "No such request" });
	}

	res.status(200).json(request);
};

module.exports = {
	createItemPost,
	getItems,
	getItem,
	deleteItem,
	updateItem,
	createItemRequest,
	getRequests,
	getRequest,
	deleteRequest,
	updateRequest,
};
