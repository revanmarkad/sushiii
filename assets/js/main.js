/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/*=============== REMOVE MENU MOBILE ===============*/
//   Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}


/*=============== HIDDEN MENU ===============*/
//   Validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, We remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
const ScrollHeader = () => {
    const header = document.getElementById('header')
    // When we scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.screenY >= 50 ? header.classList.add(bg-header)
                       : header.classList.remove(bg-header)

}

window.addEventListener('scroll', ScrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop -58,
                        sectionId = current.grtAttribute('id'),
                        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                        sectionClass.classList.add('active-link')
                }else{
                        sectionClass.classList.remove('active-link')
                }
        })
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//  Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//  We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classsList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//  We validate if the user previously chose a topic
if (selectedTheme) {
    //  If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark. 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme) 
}

//  Activate or Deativate the theme manually with the button 
themeButton.addEventListener('click', () => {
    //  Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //  We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', grtCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
//  reset: true, // Animation Repeat
})

sr.reveal('.home__img')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img', {origin: 'right'})
sr.reveal('.recently__data', {origin: 'left'})
sr.reveal('.recently__image', {origin: 'right'})
sr.reveal('.popular__card', {interval: 100})
sr.reveal('.newsletter__container')
sr.reveal('.footer__logo')
sr.reveal('.footer__description')
sr.reveal('.footer__contant')
sr.reveal('.footer__info')
