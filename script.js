// Navigation
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


// Data Send to whatsapp

function sendWhatsapp() {
    let number = "+919284916179";

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;

    var url = "https://wa.me/" + number + "?text=" 
    + "Name: " +name+ "%0a"
    + "Email: "+email+ "%0a"
    + "Message: " +message+ "%0a%0a";

    window.open(url, "_blank").focus();

}





