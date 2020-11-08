function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function ToSubmit(){
    alert("Thank you for your message!");
    document.getElementsByClassName("w")[0].value = "";
    document.getElementsByClassName("w")[1].value = "";
    document.getElementsByClassName("w")[2].value = "";
    document.getElementsByClassName("w")[3].value = "";
}

function About(){
    var toPixel = document.getElementsByClassName("main__inner");
    window.scrollTo({
        top: toPixel[0].offsetTop - 80,
        behavior: "smooth"
    });
}
function Top(){
    var toPixel = document.getElementsByClassName("rating");
    window.scrollTo({
        top: toPixel[0].offsetTop - 80,
        behavior: "smooth"
    });
}
function home(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function login(){
    document.getElementsByClassName("login")[0].style.display = "block";
}

function signIn(){
    var nick = document.getElementsByClassName("email")[0].value;
    console.log(nick);
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementById("nick").innerHTML = nick;
}