var d = new Date();
document.getElementById('current-year').innerHTML = d.getFullYear() + " ";

var header = document.getElementById('header');
var links = document.getElementsByClassName('menu-link');

window.onscroll = function() {
  if (window.pageYOffset > 10 && window.pageYOffset < 101) {
    header.style.backgroundColor = "rgba(255,255,255," + window.pageYOffset + "%)";
    header.style.boxShadow = "rgba(0, 0, 0, " + (0.4 * window.pageYOffset / 100) + ") 0px 3px 3px";
  } else if (window.pageYOffset > 100) {
    header.style.backgroundColor = "rgba(255,255,255,100%)";
    header.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 3px 3px";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = '#353535';
    }
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = 'rgb(207, 179, 179)';
    }
  }
}
