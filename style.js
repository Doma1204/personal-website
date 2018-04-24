var isSidebarOpened = false;
var line1;
var line2;
var line3;
var main;
var topBar;
var menu;
var slideBar;

$(document).ready(function() {
  line1 = document.getElementById("line1").style;
  line2 = document.getElementById("line2").style;
  line3 = document.getElementById("line3").style;
  main = document.getElementById("main").style;
  topBar = document.getElementById("topbar").style;
  menu = document.getElementById("menu").style;
  // sliderBar = document.getElementById("slide-bar").style;

  $("#menu").hover(function() {
    line2.width = "30px";
    line3.width = "30px";
  }, function() {
    if (!isSidebarOpened) {
      line2.width = "20px";
      line3.width = "25px";
    }
  });

  $(window).on("resize", isSmallScreen);

});

function toggleSidebar() {
  if (!isSidebarOpened) {
    main.marginLeft = "300px";
    main.width = "100%";
    main.marginTop = "0px";
    topBar.height = "0px";

    threeLineToCross();

    menu.marginLeft = "230px";

    isSidebarOpened = true;
  } else {
    main.marginLeft = "0px";
    main.marginTop = "70px";
    main.width = "100%";
    topBar.height = "70px";

    crossToThreeLine();

    menu.marginLeft = "0px";
    // document.getElementById("menu").style.top = "15px";
    isSidebarOpened = false;
  }
}

function threeLineToCross() {
  line1.transform = "rotate(45deg)";
  line1.marginTop = "10px";
  line2.display = "none";
  line3.transform = "rotate(-45deg)";
  line3.width = "30px";
  line3.marginTop = "-9px";
}

function crossToThreeLine() {
  line1.transform = "rotate(0deg)";
  line1.marginTop = "5px";
  line2.display = "inherit";
  line3.transform = "rotate(0deg)";
  line3.width = "30px";
  line3.marginTop = "0px";
  if (!isSidebarOpened) {
    line2.width = "20px";
    line3.width = "25px";
  }
}

function isSmallScreen() {
  var width = $(window).width();
  var smallWidth = width - 300;
  if ($(window).width() < 1000) {
    if (!isSidebarOpened) {
      main.marginLeft = "0px";
      main.marginTop = "70px";
      main.width = width.toString() + "px";
      topBar.height = "70px";
    } else {

    }
    menu.width = "30px";
  } else {
    main.marginLeft = "300px";
    main.marginTop = "0px";
    main.width = smallWidth.toString() + "px";
    topBar.height = "0px";
    menu.width = "0px";
    isSidebarOpened = false;
    menu.marginLeft = "0px"
    crossToThreeLine();
  }
}
