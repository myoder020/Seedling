//jQuery way
// $(document).ready(function(){
//     $("#navbar-frame").load("navigation.html");
// });

//vanilla JavaScript way
document.getElementById("navbar").innerHTML = 
"<div id='topnav'>"
+ "<ul>"
+ "<li> <a class='nav' id='navHome' href='LandingPage.html'>Home</a> </li>"
+ "<li> <a class='nav' id='navFFInfo' href='FFInfo.html'>Fantasy Football Info</a> </li>"
+ "</ul>"
+ "</div>";


// hard coding
// var cPage = window.location.pathname;
// if(cPage == '/LandingPage.html') {
//     console.log("You're at the homepage");
//     document.getElementById("navHome").setAttribute("class","active");
// } else if (cPage == '/FFInfo.html') {
//     console.log("You're at the FFInfo page");
//     document.getElementById("navFFInfo").setAttribute("class","active");
// }

//get current page and compare with all links in navigation and set current link to active
(function() {
var nav = document.getElementById("topnav");
console.log(nav);
var navLinks = nav.getElementsByClassName("nav");
var current = window.location.pathname.split("/")[1];
for (var i = 0; i < navLinks.length; i++) {
    if (current == navLinks[i].getAttribute("href")) {
        navLinks[i].className = "active";
    }
}
})();