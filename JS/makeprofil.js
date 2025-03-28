function makeprofil(post) {
	// squelette
	const new_profil = document.createElement("div");
	new_profil.classList.add("profil");
	const new_useravatar = document.createElement("img");
	new_useravatar.classList.add("avatar");
	const new_profilinformation = document.createElement("div");
	new_profilinformation.classList.add("profilinformation");
	const new_username = document.createElement("p");
	new_username.classList.add("username");
	const new_userdesc = document.createElement("p");
	new_userdesc.classList.add("userdesc");

	const new_avatarinteraction = document.createElement("div");
	new_avatarinteraction.classList.add("avatarinteraction");
	const new_ul = document.createElement("ul");

	const new_li_add = document.createElement("add");
	new_li_add.classList.add("add");
	const new_li_messages = document.createElement("li");
	new_li_messages.classList.add("messages");
	const new_li_blockuser = document.createElement("li");
	new_li_blockuser.classList.add("blockuser");
	const new_li_addimg = document.createElement("img");
	new_li_addimg.classList.add("adduser");
	const new_li_messagesimg = document.createElement("img");
	new_li_messagesimg.classList.add("messages");
	const new_li_blockuserimg = document.createElement("img");
	new_li_blockuserimg.classList.add("blockuser");


	// data

	new_useravatar.src = "./IMG/Nav[1]User.png";
	new_username.textContent = post.username;
	new_userdesc.textContent = post.userdesc;
	new_li_addimg.src = "./IMG/profil[1]adduser.png";
	new_li_messagesimg.src = "./IMG/Nav[2]Messages.png";
	new_li_blockuserimg.src = "./IMG/profil[1]blockuser.png";

	// parents

	new_profil.appendChild(new_useravatar);

		new_profil.appendChild(new_profilinformation);
			new_profilinformation.appendChild(new_username);
			new_profilinformation.appendChild(new_userdesc);
	

		new_profil.appendChild(new_avatarinteraction);
			new_avatarinteraction.appendChild(new_ul);
				new_ul.appendChild(new_li_add);
					new_li_add.appendChild(new_li_addimg);
				new_ul.appendChild(new_li_messages);
					new_li_messages.appendChild(new_li_messagesimg);
				new_ul.appendChild(new_li_blockuser);
					// bug user block ne s'affiche pas à corriger
					new_li_blockuser.appendChild(new_li_addimg);

	return new_profil;
}

export default makeprofil;
