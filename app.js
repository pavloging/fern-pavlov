const header = document.querySelector('#header')
let html = ''
html = `
<div class="hide-menu" hidden>
    <img id="close" src="img/close.png">
    <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
    <img id="img-wechat" src="img/qr-code.png">
</div>

<div class="header">
<div class="link">
    <a href="index.html">Главная</a>
</div>
<div class="box">
    <h1>Презентация компании ИП Павлова</h1>
    <p>
        Наша компания является крупным заготовителем соленого и сушеного  папоротника Орляк Дальневосточный.
    </p>
    <a href="https://wa.me/79098410641/?text" target="_blank"><img class="header-icon" src="img/whatsapp.png" alt="whatsapp"></a>

    <img class="header-icon" src="img/wechat.png" alt="wechat" id="wechat">
</div>
<div class="link">
    <a href="about.html">О нас</a>
</div>
</div>`
header.innerHTML += html

const el = document.querySelector('#wechat')
const menuHidden = document.querySelector('.hide-menu')
const isHidden = menuHidden.hasAttribute('hidden')
const closeHidden = document.querySelector('#close')

el.addEventListener('click', (() => {
        menuHidden.removeAttribute('hidden')
}))

closeHidden.addEventListener('click', (() => {
    menuHidden.setAttribute('hidden','hidden')
}))
