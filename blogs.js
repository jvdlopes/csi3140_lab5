var blogList = [];
var printer = document.getElementById("postsContainer");

const postBtn = document.getElementById("createPost");
postBtn.addEventListener("click",handleAddPost);
blogList.push(new blog("The making of this blog","John","This blog site was not fun to make."));

displayPosts();

function handleAddPost(event){
    var title = document.getElementById("titleForm").value;
    var author = document.getElementById("authorForm").value;
    var content = document.getElementById("contentForm").value;
    blogList.push(new blog(title, author, content));
    displayPosts();
}
alert
function displayPosts(){
    printer.innerHTML = "";
    var post = "";
    for (let x = 0; x < blogList.length; x++) {
        post += "<div id = 'blogPost'> <h1 onclick=\"alert('" + blogList[x].text + "')\">" + blogList[x].title+ "</h1> <h3>by " + blogList[x].author + " on " + blogList[x].date + "</h3> <p>" + blogList[x].text + "</p></div>";
    }
    printer.innerHTML ="" + post;
}

function testPrint(){
    
    post += '<h1>this is a test</h1>';
    printer.innerHTML = "" + post;
}

function blog(title,author,text){
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = new Date();
}