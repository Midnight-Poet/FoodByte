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



// Scroll animation
gsap.registerPlugin('ScrollTrigger')

let heroSection = document.querySelector('.hero-section').children
let sections = document.querySelectorAll('section')
let sects = document.querySelectorAll('.sub-sec')
let subSections = document.querySelectorAll('.sub-class')
let comments = document.querySelectorAll('.comments')
let header = document.querySelectorAll('header')
let footer = document.querySelector('footer').children
let form = document.querySelector('form')


header =gsap.utils.toArray(header)
form =gsap.utils.toArray(form)
sects =gsap.utils.toArray(sects)
heroSection = gsap.utils.toArray(heroSection)
sections = gsap.utils.toArray(sections)
subSections = gsap.utils.toArray(subSections)
footer = gsap.utils.toArray(footer)

let group1 = gsap.utils.toArray(heroSection[1].children)
let group1Offspring = gsap.utils.toArray(group1[2].children)

gsap.from(heroSection[0].children, {
    scrollTrigger: {
        trigger: heroSection[0],
        start: 'top center',
        markers: true
    },
    y: 100,
    opacity: 0,
    filter: 'blur(20px)',
    duration: 1.5,
    stagger: {
        each: 0.4
    }
})

let sequence = gsap.timeline({
    scrollTrigger: {
        trigger: heroSection[1],
        start: 'top center',
    }
})

gsap.from(group1[0], {
    scrollTrigger: {
        trigger: group1[0],
        start: 'top center',
    },
    x: 100,
    opacity: 0,
    filter: 'blur(40px)',
    duration: 1.5,
})

sequence.from(group1[1], {
    scale: 0,
    duration: 1
}).from(group1Offspring, {
    y: 100,
    opacity: 0,
    filter: 'blur(40px)',
    duration: 0.6,
    stagger: {
        each: 0.1
    }
}).from(comments, {
    y: 100,
    opacity: 0,
    filter: 'blur(40px)',
    duration: 1.5,
    stagger: {
        each: 0.2
    }
}).from(group1Offspring, {
    scrollTrigger: {
        trigger: group1Offspring,
        start: 'top 40%',
        scrub: 5,
    },
    y: 0,
    duration: 3,
    stagger: {
        each: 0.2
    }
    
})

sections.forEach(section => {
    let sequence2 = gsap.timeline({
        scrollTrigger: {
            trigger: section.children,
            start: 'top 80%',
        }
    })
    sequence2.from(section.children, {
        y: 100,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        stagger: {
            each: 0.3
        }
    })
})

sects.forEach(sect => {
    let sequence2 = gsap.timeline({
        scrollTrigger: {
            trigger: sect,
            start: 'top 80%',
        }
    })
    sequence2.from(sect.children, {
        y: 100,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        stagger: {
            each: 0.3
        }
    })
})

form.forEach(sect => {
    let sequence2 = gsap.timeline({
        scrollTrigger: {
            trigger: sect,
            start: 'top 80%',
        }
    })
    sequence2.from(sect.children, {
        y: 100,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        stagger: {
            each: 0.1
        }
    })
})


footer.forEach(sect => {
    let sequence2 = gsap.timeline({
        scrollTrigger: {
            trigger: sect,
            start: 'top bottom',
        }
    })
    sequence2.from(sect.children, {
        y: -50,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        stagger: {
            each: 0.2
        }
    })
})

subSections.forEach(subsec => {
    let sequence2 = gsap.timeline({
        scrollTrigger: {
            trigger: subsec,
            start: 'top 80%',
        }
    })
    sequence2.from(subsec.children, {
        y: 100,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        stagger: {
            each: 0.3
        }
    })
})





