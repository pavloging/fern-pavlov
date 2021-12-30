//Window desktop/mobile

let screenFull = false;
let pageMobile = document.createElement("div");

sizeScreen();

window.addEventListener(
  "resize",
  function () {
    // console.log("Высота", event.target.innerHeight);
    // console.log("Ширина", event.target.innerWidth);
    sizeScreen();
  },
  true
);

function sizeScreen() {
  if (screen.height < screen.width && screenFull === false) {
    // console.log("Меняем");
    document.querySelector(".all-mobile-divs").hidden = true;
    newHTMLforDesktop();
  }
  if (screen.height > screen.width && screenFull === true) {
    // console.log("Обратно");
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
            <img id="fern-desktop" src="/images/desktop/fern.jpg">
            <h1 id="header-fern-h1">IP PAVLOVA</h1>
            <details id="lang">
              <summary>Язык</summary>
              <a href="/index.html">En</a><br>
              <a href="/ru/index.html">Ru</a>
          </details>
            <a href="https://wa.me/79098410641/?text" target="_blank">
                <img id="header-fern-whatsapp" src="/images/other/whatsapp.png">
            </a>
            <img id="header-fern-wechat" onclick='wechatOpen()' src="/images/other/wechat.png">
        </div>

        <div id="about-us-desktop">
            <img id="about-us-bg-desktop" src="/images/desktop/about-us-bg.png">
            <img id="about-us-img-desktop" src="/images/desktop/about-us.png">
            <h1>О нас</h1>
            <h2>
              Наша компания<br>
              крупный поставщик<br>
              солено-сушеного<br>
              Дальневосточного<br>
              папоротника орляк</h2>
            <button onclick="document.location='about.html'"><h3>Далее</h3></button>
        </div>

        <div id="work-process-desktop">
            <div class="img-work-desktop">

                <div id="sunrise-desktop-div">
                    <h2>восход</h2>
                    <img id="sunrise-desktop" src="/images/desktop/sunrise.png">
                </div>
                <div id="salting-desktop-div">
                    <h2>засолка</h2>
                    <img id="salting-desktop" src="/images/desktop/salting.png">
                </div> 
                <div id="ready-desktop-div">
                    <h2>готовый</h2>
                    <img id="ready-desktop" src="/images/desktop/ready.png">
                </div>

            </div>
            
                <div id="packed-desktop-div">
                    <h2>упакованный</h2>
                    <img id="packed-desktop" src="/images/desktop/packed.png">
                </div>
            
        </div>

        <div id="dried-fern-div">
          <h1>...Сушеный папоротник...</h1>
          <img id="dried-fern" src="/images/desktop/dried-fern.jpg">
        </div>

        <div id="ready-dry-ferrous-div">
          <h1>...Готовый папоротник...</h1>
          <img id="ready-dry-ferrous" src="/images/desktop/ready-dry-ferrous.jpg">
        </div>


    </div>

    <div id="wechat"></div>
    `;
  pageMobile.innerHTML = html;
  document.querySelector("body").prepend(pageMobile);
}
