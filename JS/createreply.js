function makereply(post) {
	// squelette
	const new_post = document.createElement("div");
	new_post.classList.add("post");
	const new_headpost = document.createElement("div");
	new_headpost.classList.add("headpost");
	const new_postuseravatar = document.createElement("div");
	new_postuseravatar.classList.add("postuseravatar");
	const new_useravatar = document.createElement("img");
	new_useravatar.classList.add("useravatar");
	const new_userinformation = document.createElement("div");
	new_userinformation.classList.add("userinformation");
	const new_username = document.createElement("p");
	new_username.classList.add("username");
	const new_userdesc = document.createElement("p");
	new_userdesc.classList.add("userdesc");
	const new_postcontent = document.createElement("div");
	new_postcontent.classList.add("postcontent");

	const new_posttext = document.createElement("p");
	new_posttext.classList.add("posttext");
	const new_postinteraction = document.createElement("div");
	new_postinteraction.classList.add("postinteraction");
	const new_ul = document.createElement("ul");
	new_ul.classList.add("ul");
	const new_li_like = document.createElement("li");
	new_li_like.classList.add("like");
	const new_li_reply = document.createElement("li");
	new_li_reply.classList.add("reply");
	const int_like = document.createElement("img");
	int_like.setAttribute("alt", "like");
	const int_reply = document.createElement("img");
	int_reply.setAttribute("alt", "replymsg");

	// data

	new_useravatar.src = post.useravatar;
	new_username.textContent = post.username;
	new_userdesc.textContent = post.userdesc;
	new_posttext.textContent = post.posttext;
	int_like.src = "./IMG/postinteraction[1]emptylike.png";
	int_reply.src = "./IMG/postinteraction[2]view.png";

	// parents

	new_post.appendChild(new_headpost);
	new_post.appendChild(new_postcontent);
	new_post.appendChild(new_postinteraction);

	new_headpost.appendChild(new_postuseravatar);
	new_headpost.appendChild(new_userinformation);

	new_postuseravatar.appendChild(new_useravatar);
	new_userinformation.appendChild(new_username);
	new_userinformation.appendChild(new_userdesc);

	new_postcontent.appendChild(new_posttext);

	new_postinteraction.appendChild(new_ul);

	new_ul.appendChild(new_li_like);
	new_ul.appendChild(new_li_reply);

	new_li_like.appendChild(int_like);
	new_li_reply.appendChild(int_reply);

	return new_post;
}

export default makereply;
