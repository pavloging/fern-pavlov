const header = document.querySelector('body')
let html = ''
html = `
<div class="hide-menu" hidden>
    <img id="close" src="images/close.png">
    <div id="teg-wechat"><h1>WeChat ID: FernRussia</h1></div>
    <img id="img-wechat" src="images/qr-code.png">
</div>`

header.innerHTML += html

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
