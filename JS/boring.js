function makepost(post) {
	// squelette
	const new_post = document.createElement("div").classList.add("post");
	const new_headpost = document.createElement("div").classList.add("headpost");
	const new_postuseravatar = document.createElement("div");
	const new_useravatar = document
		.createElement("img")
		.classList.add("useravatar");
	const new_userinformation = document
		.createElement("div")
		.classList.add("userinformation");
	const new_username = document.createElement("p").classList.add("username");
	const new_userdesc = document.createElement("p").classList.add("userdesc");
	const new_postcontent = document
		.createElement("div")
		.classList.add("postcontent");
	const new_postimg = document.createElement("img").classList.add("postimg");
	const new_posttext = document.createElement("p").classList.add("posttext");
	const new_postinteraction = document
		.createElement("div")
		.classList.add("postinteraction");
	const new_ul = document.createElement("ul").classList.add("ul");
	const new_li_like = document.createElement("li").classList.add("like");
	const new_li_view = document.createElement("li").classList.add("view");
	const new_li_messages = document
		.createElement("li")
		.classList.add("messages");
	const new_li_retweet = document.createElement("li").classList.add("retweet");
	const new_li_share = document.createElement("li").classList.add("share");
	const int_like = document.createElement("img").setAttribute("alt", "like");
	const int_view = document.createElement("img").setAttribute("alt", "view");
	const int_messages = document
		.createElement("img")
		.setAttribute("alt", "messages");
	const int_retweet = document
		.createElement("img")
		.setAttribute("alt", "retweet");
	const int_share = document.createElement("img").setAttribute("alt", "share");

	// data
	console.log(new_post);

	new_useravatar.src = post.useravatar;
	new_username.textContent = post.username;
	new_userdesc.textContent = post.userdesc;
	new_postimg.src = post.postimg;
	new_posttext.textContent = post.posttext;
	int_like.src("./IMG/postinteraction[1]emptylike.png");
	int_view.src("./IMG/postinteraction[2]view.png");
	int_messages.src("./IMG/Nav[2]Messages.png");
	int_retweet.src("./IMG/postinteraction[3]retweet.png");
	int_share.src("./IMG/postinteraction[4]share.png");

	// parents

	new_post.appendChild(new_headpost);
	new_post.appendChild(new_postcontent);
	new_post.appendChild(new_postinteraction);

	new_headpost.appendChild(new_postuseravatar);
	new_headpost.appendChild(new_userinformation);

	new_postuseravatar.appendChild(new_useravatar);
	new_userinformation.appendChild(new_username);
	new_userinformation.appendChild(new_userdesc);

	new_postcontent.appendChild(new_postimg);
	new_postcontent.appendChild(new_posttext);

	new_postinteraction.appendChild(new_ul);

	new_ul.appendChild(new_li_like);
	new_ul.appendChild(new_li_view);
	new_ul.appendChild(new_li_messages);
	new_ul.appendChild(new_li_retweet);
	new_ul.appendChild(new_li_share);

	new_li_like.appendChild(int_like);
	new_li_view.appendChild(int_view);
	new_li_messages.appendChild(int_messages);
	new_li_retweet.appendChild(int_retweet);
	new_li_share.appendChild(int_share);

	// On retourne la carte unique correspondant à l'objet passé en paramètre
	return post;
}

export default makepost;
