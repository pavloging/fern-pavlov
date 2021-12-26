//innerHtml
//Header for mobile

const header = document.querySelector("#header-fern-mobile");
const html = `
    <div id="header-fern" data-aos="zoom-in">
        <img id="header-fern-bg" src="images/mobile/fern.jpg">
        <h1  onclick="document.location='index.html'"id="header-fern-h1">IP PAVLOVA</h1>
        <a href="https://wa.me/79098410641/?text" target="_blank">
            <img id="header-fern-whatsapp" src="images/other/whatsapp.png">
        </a>
        <img id="header-fern-wechat" onclick='wechatOpen()' src="images/other/wechat.png">
    </div>`;
header.innerHTML += html;

//WeChat

function wechatOpen() {
  let wechatHTML = `
        <div class="hide-menu">
            <img id="close" onclick='wechatClose()' src="images/other/close.png">
            <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
            <img id="img-wechat" src="images/other/qr-code.png">
        </div>`;
  document.querySelector("#wechat").innerHTML = wechatHTML;
}
function wechatClose() {
  wechatHTML = `
        <div class="hide-menu" hidden>
            <img id="close" onclick='wechatClose()' src="images/other/close.png">
            <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
            <img id="img-wechat" src="images/other/qr-code.png">
        </div>`;
  document.querySelector("#wechat").innerHTML = wechatHTML;
}

//Window desktop/mobile

let screenFull = false;
let pageMobile = document.createElement("div");

sizeScreen();

window.addEventListener(
  "resize",
  function (event) {
    console.log("Высота", event.target.innerHeight);
    console.log("Ширина", event.target.innerWidth);

    sizeScreen();
  },
  true
);

function sizeScreen() {
  if (screen.height < screen.width && screenFull === false) {
    console.log("Меняем");
    document.querySelector(".all-mobile-divs").hidden = true;
    newHTMLforDesktop();
  }
  if (screen.height > screen.width && screenFull === true) {
    console.log("Обратно");
    document.querySelector(".all-mobile-divs").hidden = false;
    screenFull = false;
    pageMobile.remove();
  }
}

function newHTMLforDesktop() {
  screenFull = true;

  pageMobile = document.createElement("div");
  pageMobile.className = "all-desktop-divs";

  let html = `
    <div class="body">
        <div id="header-fern">
            <img id="fern-desktop" src="images/desktop/fern.jpg">
            <h1 onclick="document.location='index.html'" id="header-fern-h1">IP PAVLOVA</h1>
            <a href="https://wa.me/79098410641/?text" target="_blank">
                <img id="header-fern-whatsapp" src="images/other/whatsapp.png">
            </a>
            <img id="header-fern-wechat" onclick='wechatOpen()' src="images/other/wechat.png">
        </div>

    </div>

    <div id="wechat"></div>
    `;
  pageMobile.innerHTML = html;
  document.querySelector("body").prepend(pageMobile);
}

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

  document.getElementById("fern-desktop").style.transition = "1s";
  document.getElementById("fern-desktop").style.width = "0";

  document.getElementById("aboutPageText").style.transition = "3.5s";
  document.getElementById("aboutPageText").style.opacity = "1";
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
