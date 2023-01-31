const menubar = document.getElementById('menubar')
const typesmenu = document.getElementById('typesmenu')
const overlay = document.getElementById('overlay')

let menuOpen = false

function openMenu(){
    menuOpen = true
    overlay.style.display = 'block'
    typesmenu.style.width = '200px'
}

function closeMenu(){
    menuOpen = flase
    overlay.style.display = 'none'
    typesmenu.style.width = '0px'
}

menubar.addEventListener('click', function () {
    if(!menuOpen) {
        openMenu()
    }
})

overlay.addEventListener('click', function () {
    if(menuOpen) {
        closeMenu()
    }
})