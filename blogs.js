function test(){
    
}
//var blogList = [];


document.writeln("<p>this is attached</p>");

const postBtn = document.getElementById("createPost");
postBtn.addEventListener("click",addBlog);
function addBlog(){
    var printer = document.getElementById("postsContainer");
    printer.innerHTML = '<h1>this is a test</h1>';
}