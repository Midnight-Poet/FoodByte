let navbar = document.querySelector('.responsive')
let menuBtn = document.querySelector('.menu-btn')
let closeBtn = document.querySelector('.closebtn')

menuBtn.addEventListener('click', () => {
    // navbar.style.display = 'flex'
    gsap.fromTo(navbar, {
        display: 'none',
        x: 800,
        duration: 1.3,
    }, {
        x: 0,
        display: 'flex'
    })
})
closeBtn.addEventListener('click', () => {
    gsap.to(navbar, {
        x: 800,
        duration: 1,
    })
    gsap.to(navbar, {
        display: 'none',
        delay: 1,
    })

})



// Slide
let slide = document.querySelector('.slide')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slidelength = slide.children[0].clientWidth
let length
let i = 1

window.addEventListener('resize', () => {
    length = window.innerWidth
    if (length > 800) {
        navbar.style.display = 'none'
    }

})

next.addEventListener('click', () => {  
    i += 1
    if (i > slide.children.length) {
        slide.scrollBy(-10000, 0)
        i = 1
    } else {
        slide.scrollBy(slidelength, 0)
    }
})

prev.addEventListener('click', () => { 
    i -= 1
    if (i == 0) {
        slide.scrollBy(10000, 0)
        i = 8
    } else {
        slide.scrollBy(-slidelength, 0)
    }
})

