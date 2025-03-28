import makepost from "./createpost.js";
import makereply from "./createreply.js";
import makeprofil from "./makeprofil.js";
import datapost from "../DATA/data.js";
import datareply from "../DATA/comment.js";
import dataprofil from "../DATA/dataprofil.js";
import dataprofilpost from "../DATA/data_profilpost.js"

const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
const main3 = document.querySelector(".main3");

// Index / Postpage / Post

const incrementPost = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const post = array[i];
		main1.appendChild(makepost(post));
	}
};

incrementPost(datapost);

// Index / Reply page / post and reply

const incrementReplyPost = (array) => {
	for (let i = 0; i <= 0; i++) {
		const post = array[i];
		main2.appendChild(makepost(post));
	}
};

incrementReplyPost(datapost);

const incrementreply = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const reply = array[i];
		main2.appendChild(makereply(reply));
	}
};

incrementreply(datareply);

// Index / Profil page / Post

// zone création profil



// les posts de l'utilisateur 

const incrementprofil = (array) => {
	for (let i = 0; i <= 0; i++) {
		const profil = array[i];
		main3.appendChild(makeprofil(profil));
	}
};


incrementprofil(dataprofil);


const incrementprofilPost = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		const post = array[i];
		main3.appendChild(makepost(post));
	}
};

incrementprofilPost(dataprofilpost);