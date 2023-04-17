const express = require("express");

const {
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
} = require("../controllers/itemsController");

const requireAuth = require("../middleware/requireAuth");

const item = express.Router();

item.use(requireAuth);

item.get("/", getItems);

// item.get("/:id", getItem);

item.post("/", createItemPost);

// item.delete("/:id", deleteItem);

// item.patch("/:id", updateItem);

item.get("/requests/all", getRequests);

// item.get("/requests/:id", getRequest);

item.post("/requests", createItemRequest);

// item.delete("/requests/:id", deleteRequest);

// item.patch("/requests/:id", updateRequest);

module.exports = item;
