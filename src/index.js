// import generateJoke from './generateJoke'
import './styles/main.scss'
import logoImg from './assets/logo.png'
import profilePhoto from './assets/profile-1.jpg'
import newsPhoto from './assets/profile-2.jpg'

const logo = document.getElementById('logo-img')
logo.src = logoImg

const profile = document.getElementById('profile-photo')
profile.src = profilePhoto

const newsPic = document.getElementById('news1-photo')
const newsPic2 = document.getElementById('news2-photo')

newsPic.src = newsPhoto
newsPic2.src = newsPhoto


const sideMenu = document.querySelector('aside')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const themeToggler = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click',(e)=>{
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click',(e)=>{
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
})