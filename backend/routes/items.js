const express = require("express");

const {
	createItemPost,
	getItems,
	deleteItem,
	createItemRequest,
	getRequests,
	deleteRequest,
} = require("../controllers/itemsController");

const requireAuth = require("../middleware/requireAuth");

const item = express.Router();

item.use(requireAuth);

item.get("/", getItems);

item.post("/", createItemPost);

item.delete("/:id", deleteItem);

item.get("/requests/all", getRequests);

item.post("/requests", createItemRequest);

item.delete("/requests/:id", deleteRequest);

module.exports = item;
