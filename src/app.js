//Header
let header = document.querySelector('#header-fern')
let html = `
<div id="header-fern" data-aos="zoom-in">
    <img onclick="document.location='index.html'" id="header-fern-bg" src="images/fern.jpg">
    <h1>IP PAVLOVA</h1>
    <a href="https://wa.me/79098410641/?text" target="_blank">
        <img id="header-fern-whatsapp" src="images/whatsapp.png">
    </a>
    <img id="header-fern-wechat" src="images/wechat.png">
</div>`
header.innerHTML += html

//WeChat
const headerChat = document.querySelector('body')
let htmlChat = `
<div class="hide-menu" hidden>
    <img id="close" src="images/close.png">
    <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
    <img id="img-wechat" src="images/qr-code.png">
</div>`

headerChat.innerHTML += htmlChat

const el = document.querySelector('#header-fern-wechat')
const menuHidden = document.querySelector('.hide-menu')
const isHidden = menuHidden.hasAttribute('hidden')
const closeHidden = document.querySelector('#close')

el.addEventListener('click', (() => {
        menuHidden.removeAttribute('hidden')
}))

closeHidden.addEventListener('click', (() => {
    menuHidden.setAttribute('hidden','hidden')
}))