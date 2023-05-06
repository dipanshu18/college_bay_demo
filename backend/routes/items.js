const express = require("express");

const {
	createItemPost,
	getItems,
	getUserItems,
	deleteItem,
	createItemRequest,
	getRequests,
	getUserRequests,
	deleteRequest,
} = require("../controllers/itemsController");

const requireAuth = require("../middleware/requireAuth");

const item = express.Router();

item.use(requireAuth);

item.get("/", getItems);

item.get("/user-items", getUserItems);

item.post("/", createItemPost);

item.delete("/:id", deleteItem);

item.get("/requests/all", getRequests);

item.get("/requests/user-requests", getUserRequests);

item.post("/requests", createItemRequest);

item.delete("/requests/:id", deleteRequest);

module.exports = item;
