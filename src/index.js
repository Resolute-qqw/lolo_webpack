// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
let Header = require('./header')
let Sidebar = require('./sidebar')
let Content = require('./content')
import Logo1 from './assets/img/logo.png'
import './style/logo.css'
let img = new Image()
img.src = Logo1
img.style.background = '#ccc'
img.classList.add('logo')
let root = document.getElementById('root')
root.append(img)

new Header()
new Sidebar()
new Content()
