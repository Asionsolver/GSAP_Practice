var nav = gsap.timeline()
nav.from("#nav img, #nav h3, #nav button",{
    y: -100,
    duration:1,
    delay:0.5,
    opacity: 0,
    stagger:0.1,
})

nav.from("#main h1",{
    y:100,
    opacity: 0,
    stagger: 0.3
})

nav.from("#main > img", {
    scale:0,
    opacity: 0,
    stagger:0.3, 
})

nav.from("h5",{
    scale:0,
    opacity:0,
})

nav.to("h5",{
    y:30,
    repeat:-1,
    duration: 0.8,
    yoyo:true
})




