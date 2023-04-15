require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/items");
const user = require("./routes/user");

// Create express app
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use("/api/items", items);
app.use("/api/user", user);

// Connect to DB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Listen for requests
		app.listen(process.env.PORT, () => {
			console.log("Connected to DB & Listening on port", process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
