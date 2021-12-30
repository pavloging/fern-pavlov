//Header for mobile
const header = document.querySelector("#header-fern-mobile");
const html = `
    <div id="header-fern" data-aos="zoom-in">
        <img id="header-fern-bg" src="/images/mobile/fern.jpg">
        <h1  onclick="document.location='index.html'" id="header-fern-h1">IP PAVLOVA</h1>
        <details id="lang">
            <summary>Язык</summary>
            <a href="/en/index.html">En</a><br>
            <a href="/ru/index.html">Ru</a>
        </details>
        <a href="https://wa.me/79098410641/?text" target="_blank">
            <img id="header-fern-whatsapp" src="/images/other/whatsapp.png">
        </a>
        <img id="header-fern-wechat" onclick='wechatOpen()' src="/images/other/wechat.png">
    </div>`;
header.innerHTML += html;

//WeChat
function wechatOpen() {
  let wechatHTML = `
          <div class="hide-menu">
              <img id="close" onclick='wechatClose()' src="/images/other/close.png">
              <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
              <img id="img-wechat" src="/images/other/qr-code.png">
          </div>`;
  document.querySelector("#wechat").innerHTML = wechatHTML;
}
function wechatClose() {
  wechatHTML = `
          <div class="hide-menu" hidden>
              <img id="close" onclick='wechatClose()' src="images/other/close.png">
              <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
              <img id="img-wechat" src="/images/other/qr-code.png">
          </div>`;
  document.querySelector("#wechat").innerHTML = wechatHTML;
}
