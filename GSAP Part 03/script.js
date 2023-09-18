var tl = gsap.timeline()

tl.from(".nav",{
    opacity: 0,
    delay:0.5,
}
)
tl.from(".nav h3, .nav h3, .nav button",{
    y:-80,
    duration: 1,
    stagger: 0.3,

}
)

tl.from(".content .left-contents h1, .content span",{
    x: -500,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger:0.2,
})

tl.from(".right-contents img",{
    scale: 0.5,
    opacity:0,
    duration:0.5
})

gsap.from(".page-2 .box",{
    opacity:0,
    scale: 0,
    duration:0.5,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger:".page-2 .box",
        scroller: "body",
        markers: true,
        start: "top 70%"
    }
})