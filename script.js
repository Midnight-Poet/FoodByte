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
let counter = document.querySelector('.navigation').children[1]
let slidelength = slide.children[0].clientWidth
let length
let count = counter.children[0]
let total = counter.children[2]
total.innerHTML = `0${slide.children.length}`
let i = 1

window.addEventListener('resize', () => {
    length = window.innerWidth
    if (length > 800) {
        navbar.style.display = 'none'
    }

})

slide.addEventListener('keydown', event => {
    if (event.key == 'ArrowRight') {
        event.preventDefault()
    } else if (event.key == 'ArrowLeft') {
        event.preventDefault()
    }
})
slide.addEventListener('wheel', (event) => {
    event.preventDefault()
})
next.addEventListener('click', () => {  
    i += 1
    if (i > slide.children.length) {
        slide.scrollBy(-10000, 0)
        i = 1
    } else {
        slide.scrollBy(slidelength, 0)
    }
    count.innerHTML = `0${i}`
})

prev.addEventListener('click', () => { 
    i -= 1
    if (i == 0) {
        slide.scrollBy(10000, 0)
        i = 8
    } else {
        slide.scrollBy(-slidelength, 0)
    }
    count.innerHTML = `0${i}`
})

