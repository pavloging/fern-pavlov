//innerHtml
//Header for mobile

const header = document.querySelector("#header-fern-mobile");
const html = `
    <div id="header-fern" data-aos="zoom-in">
        <img id="header-fern-bg" src="images/mobile/fern.jpg">
        <h1>IP PAVLOVA</h1>
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
            <h1 id="header-fern-h1">IP PAVLOVA</h1>
            <a href="https://wa.me/79098410641/?text" target="_blank">
                <img id="header-fern-whatsapp" src="images/other/whatsapp.png">
            </a>
            <img id="header-fern-wechat" onclick='wechatOpen()' src="images/other/wechat.png">
        </div>

        <div id="about-us-desktop">
            <img id="about-us-bg-desktop" src="images/desktop/about-us-bg.png">
            <img id="about-us-img-desktop" src="images/desktop/about-us.png">
            <h1>ABOUT US</h1>
            <h2>
                Our company is<br>
                a large supplier of<br>
                salted and dried<br>
                Orlyak Far East fern</h2>
            <button onclick="document.location='about-us.html'"><h3>MORE</h3></button>
        </div>

        <div id="work-process-desktop">
            <div class="img-work-desktop">

                <div id="sunrise-desktop-div">
                    <h2>sunrise</h2>
                    <img id="sunrise-desktop" src="images/desktop/sunrise.png">
                </div>
                <div id="salting-desktop-div">
                    <h2>salting</h2>
                    <img id="salting-desktop" src="images/desktop/salting.png">
                </div> 
                <div id="ready-desktop-div">
                    <h2>ready</h2>
                    <img id="ready-desktop" src="images/desktop/ready.png">
                </div>

            </div>
            
                <div id="packed-desktop-div">
                    <h2>packed</h2>
                    <img id="packed-desktop" src="images/desktop/packed.png">
                </div>
            
        </div>

        <img id="dried-fern" src="images/desktop/dried-fern.jpg">

        <img id="ready-dry-ferrous" src="images/desktop/ready-dry-ferrous.png">

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
}
setTimeout(reloadIco, 700);
