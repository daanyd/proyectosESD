console.log("hola...")

const settings_icon= document.querySelector('.settings_icon')
const navigation_bar= document.querySelector('.navigation_bar')

settings_icon.onclick = () => {
    navigation_bar.classList.toggle('opened')
}