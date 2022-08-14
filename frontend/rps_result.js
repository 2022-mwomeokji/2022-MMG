window.onload = function () {
  if (localStorage.getItem("src")) {
    var rps = localStorage.getItem("src");
  }
  if (localStorage.getItem("menu")) {
    var menu = localStorage.getItem("menu");
  }
  if (localStorage.getItem("name")) {
    var people = localStorage.getItem("name");
  }

  document.getElementById("menu").innerHTML = menu;
  document.getElementById(
    "name"
  ).innerHTML = `<div id="name">'${people}' <span>승!</span></div>`;
  document.getElementById("rps").src = rps;

  document.getElementById("menu_img").src = "./img_rps/rps_main_sec_logo.svg";
};
