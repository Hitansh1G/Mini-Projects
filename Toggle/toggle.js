var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var small = document.getElementById("small");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        small.style.marginLeft = "100px";
        
        toggled = true;
        
    } else {
        
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        small.style.marginLeft = "1px";
        
        toggled = false;
        
    }
    
}