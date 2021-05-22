document.getElementById('page-header');
document.getElementById("main-heading");
document.getElementById("para1");
document.getElementById("para2");
document.getElementById("para4");
document.getElementById("btn");
document.getElementById("red");
document.getElementById("blue");
document.getElementById("yellow");
document.getElementById("green");
document.getElementById("black")

document.getElementById("main-heading").textContent="New DOM Layout"
document.getElementById("page-header").classList.remove("bg-dark")
document.getElementById("page-header").classList.add("bg-success")

document.getElementById("para1").textContent += "The Doocument Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
document.getElementById("para2").textContent +="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
function showText() {
    document.getElementById("para4").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."

}
    
    document.getElementById("btn").addEventListener("click", showText)    

red.classList.remove('bg-white');
red.classList.add('bg-danger');

blue.classList.remove('bg-white');
blue.classList.add('bg-primary');

yellow.classList.remove('bg-white');
yellow.classList.add('bg-warning');


green.classList.remove('bg-white');
green.classList.add('bg-success');

black.classList.remove('bg-white');
black.classList.add('bg-dark');