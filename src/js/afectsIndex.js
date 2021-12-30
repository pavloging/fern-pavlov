//CSS Afects

function reloadIco() {
  document.getElementById("header-fern-whatsapp").style.transition = "1s";
  document.getElementById("header-fern-whatsapp").style.transform =
    "rotate(360deg)";

  document.getElementById("header-fern-wechat").style.transition = "1s";
  document.getElementById("header-fern-wechat").style.transform =
    "rotate(-360deg)";

  document.getElementById("header-fern-h1").style.transition = "1.5s";
  document.getElementById("header-fern-h1").style.transform = "rotate(360deg)";
}
setTimeout(reloadIco, 700);
