const posttemplate = document.querySelector('.posttemplate');
console.log(posttemplate);



fetch('http://188.165.84.123:4000/userdesc/1')
.then(res => res.json())
.then(data => {
    data.map(user => {
    const post = posttemplate.textContent.cloneNode(true).children[0]
    const username = post.querySelector('.username')
    const userdesc = post.querySelector('.userdesc')
    username.textContent = user.username
    userdesc.textContent = user.userdesc
    })
})
.catch(error => console.log(error))

