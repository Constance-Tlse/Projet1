const express = require("express");
const app = express();
const data = require("../DATA/data.json");

app.use(express.json());

app.listen(4000, () => {
	console.log("Serveur à l'écoute");
});
/*
app.get("/post:username", (req, res) => {
	res.status(200).json(username);
});
*/

app.get("/post:id", (req, res) => {
	const id = req.params.id;
	const post = data.filter((p) => p.id === id);
	res.send(post[0]);
});

app.get("/post:userdesc", (req, res) => {
	res.status(200).json(userdesc);
});

app.get("/post:postimg", (req, res) => {
	res.status(200).json(postimg);
});

app.get("/post:posttext", (req, res) => {
	res.status(200).json(posttext);
});
