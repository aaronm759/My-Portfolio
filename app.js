function popUp() {
    document.getElementById('popup').style.display = 'block';
}
function close() {
    document.getElementById('popup').style.display = 'none';
}
document.getElementById('contact').addEventListener("click", popUp);
document.getElementById('popup').addEventListener("click", close)
//it worked