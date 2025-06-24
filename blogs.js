var blogList = ["<p>this</p>","<p>is</p>","<p>a</p>","<p>test</p>"];
var printer = document.getElementById("postsContainer");

const postBtn = document.getElementById("createPost");
postBtn.addEventListener("click",addBlog);


function addBlog(){
    
    blogList.forEach(print);
    
}

function print(value){
    var post = "";
    post += '<h1>this is a test</h1>';
    printer.innerHTML ="" + post;
}