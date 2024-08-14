let welcome = document.getElementById('welcome');
let generator = document.getElementById('generator');
let head = document.getElementById('keycode');

function keycode(event) {
let key = event.key;
let location = event.location;
let which = event.which;
let code = event.code;
head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventLocation").innerHTML= location;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;
welcome.remove()
document.getElementsByClassName("box").style.color = "Magenta";
}