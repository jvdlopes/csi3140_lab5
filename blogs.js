var blogList = [];
var printer = document.getElementById("postsContainer");

const postBtn = document.getElementById("createPost");
postBtn.addEventListener("click",handleAddPost);
var temp = new blog("test","me","this is a test")
blogList.push(temp);

function handleAddPost(event){
    var title = getElementById("title");
    document.writeln("<p>" + title + "</p>");
    displayPosts();
}

function displayPosts(){
    printer.innerHTML = "";
    var post = "";
    for (let x = 0; x < blogList.length; x++) {
        //post += "<p>" + blogList[x].author + "</p>";
        post += "<div id = 'blogPost'> <h1><a>" + blogList[x].title+ "</a></h1> <h3>by " + blogList[x].author + " on " + blogList[x].date + "</h3> <p>" + blogList[x].text + "</p></div>";
    }
    printer.innerHTML ="" + post;
    //printer.innerHTML = "<p>" + test.author + "</p>";
}

function print(value){
    
    post += '<h1>this is a test</h1>';
    
}

function blog(title,author,text){
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = new Date();
}