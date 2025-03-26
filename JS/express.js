const express = require("express");
const fs = require("fs");
const app = express();

app.listen(4000, () => {
	console.log("Serveur à l'écoute");
});

function getDataPropertyById(propertyName, id) {
	return (req, res) => {
		const absolutePath = "../DATA/data.json"; // Remplacez par le chemin absolu correct
		fs.readFile(absolutePath, "utf8", (err, data) => {
		  if (err) {
			console.error(err);
			res.status(500).send("Erreur lors de la lecture du fichier JSON");
			return;
		}
		try {
		  const jsonData = JSON.parse(data);
		  const item = jsonData.find((item) => item.id === id);
		  if (item && item[propertyName]) {
			res.send(item[propertyName]);
		  } else {
			res.status(404).send(`${propertyName} non trouvé pour l'id ${id}`);
		  }
		} catch (parseError) {
		  console.error(parseError);
		  res.status(500).send("Erreur lors de l'analyse du fichier JSON");
		}
	  });
	};
  }

  app.get("/useravatar/:id", (req, res) => {
	const id = req.params.id;
	getDataPropertyById("useravatar", id)(req, res);
  });

  app.get("/username/:id", (req, res) => {
	const id = req.params.id;
	getDataPropertyById("username", id)(req, res);
  });

  app.get("/userdesc/:id", (req, res) => {
	const id = req.params.id;
	getDataPropertyById("userdesc", id)(req, res);
  });

  app.get("/postimg/:id", (req, res) => {
	const id = req.params.id;
	getDataPropertyById("postimg", id)(req, res);
  });

  app.get("/posttext/:id", (req, res) => {
	const id = req.params.id;
	getDataPropertyById("posttext", id)(req, res);
  });
