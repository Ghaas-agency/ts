var d = new Date();
document.getElementById('current-year').innerHTML = d.getFullYear() + " ";

var header = document.getElementById('header');
var links = document.getElementsByClassName('menu-link');
var menuIcon = document.getElementsByClassName('header-menu-icon')[0];
var tsLogo = document.getElementsByClassName('header-logo')[0];

tsLogo.style.filter = "grayscale(100%) brightness(4)";

window.onscroll = function() {
  if (window.pageYOffset > 10 && window.pageYOffset < 101) {
    header.style.backgroundColor = "rgba(255,255,255," + window.pageYOffset + "%)";
    header.style.boxShadow = "rgba(0, 0, 0, " + (0.4 * window.pageYOffset / 100) + ") 0px 3px 3px";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = '#3a3a3a';
    }
    menuIcon.style.filter = "invert(100%)";
    tsLogo.style.filter = "unset";
  } else if (window.pageYOffset > 100) {
    header.style.backgroundColor = "rgba(255,255,255,100%)";
    header.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 3px 3px";
    menuIcon.style.filter = "invert(100%)";
  } else {
    tsLogo.style.filter = "grayscale(100%) brightness(4)";
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    menuIcon.style.filter = "invert(0%)";
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = 'rgb(255, 255, 255)';
    }
  }
}

var headerList = document.getElementById('header-list');

function matchMediaQuery(mm) {
  if (mm.matches) {
    headerList.style.display = "none";
  } else {
    headerList.style.display = "block";
  }
}

var mm = window.matchMedia("(max-width: 767px)");
matchMediaQuery(mm);
mm.addListener(matchMediaQuery);

var menuToggle = true;

window.onclick = function(e) {
  if (e.target.className === 'header-menu-icon') {
    if (menuToggle) {
      headerList.style.display = "block";
      menuToggle = false;
    } else {
      headerList.style.display = "none";
      menuToggle = true;
    }
  }
}
