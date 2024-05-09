// To connect with mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://princesainiAdmin:xUlQY2pbnfjRcWEN@shopa2z.jfasd5s.mongodb.net/?retryWrites=true&w=majority').catch(error => console.log(error));

// xUlQY2pbnfjRcWEN
// Schema for users of app
const orderSchema = new mongoose.Schema({
	orderNumber:{
		type: String,
		unique: true,
		required: true
	},
	items: {
		type: Number,
		required: true,
	},
	totalAmt: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const Order = mongoose.model('orders', orderSchema);
Order.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	
});

app.post("/", async (req, resp) => {
	try {
		const { uniqueId, itemCount, total } = req.body; // Destructure the data from the request body
		const order = new Order({ orderNumber: uniqueId, items: itemCount, totalAmt: total });
		let result = await order.save();
		result = result.toObject();
		if (result) {
		  resp.send(req.body);
		  console.log(result);
		} else {
		  console.log("Order already Placed Successfully");
		}
	  } catch (e) {
		resp.send("Something Went Wrong");
	  }
});
app.listen(5000);
