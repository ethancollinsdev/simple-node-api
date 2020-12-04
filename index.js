const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.json({
		name: "Best dev team",
		devs: ["Fami", "Ethan", "Sebastian", "Petras"],
	});
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
