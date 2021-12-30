//CSS Afects
function reloadIco() {
  document.getElementById("aboutPageText").style.transition = "3.5s";
  document.getElementById("aboutPageText").style.opacity = "1";

  document.getElementById("header-fern-whatsapp").style.transition = "1s";
  document.getElementById("header-fern-whatsapp").style.transform =
    "rotate(360deg)";

  document.getElementById("header-fern-wechat").style.transition = "1s";
  document.getElementById("header-fern-wechat").style.transform =
    "rotate(-360deg)";

  document.getElementById("header-fern-h1").style.transition = "1.5s";
  document.getElementById("header-fern-h1").style.transform = "rotate(360deg)";

  if (screen.height < screen.width) {
    document.getElementById("fern-desktop").style.transition = "1s";
    document.getElementById("fern-desktop").style.width = "0";
  }
}
setTimeout(reloadIco, 700);

function tanseLogoRight() {
  document.getElementById("header-fern-h1").style.transition = "2s";
  document.getElementById("header-fern-h1").style.transform = "rotate(-5deg)";
}
setInterval(tanseLogoRight, 2500);

function tanseLogoLeft() {
  document.getElementById("header-fern-h1").style.transition = "2s";
  document.getElementById("header-fern-h1").style.transform = "rotate(5deg)";
}

setInterval(tanseLogoLeft, 5000);
