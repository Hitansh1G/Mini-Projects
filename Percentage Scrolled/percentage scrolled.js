var scrolledBar = document.getElementById("scrolled");

function getDocHeight(){
    return Math.max(
        document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight
    );
}