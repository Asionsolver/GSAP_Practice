var timeLine = gsap.timeline()

gsap.to('#box1',{
    x: 300,
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
})

gsap.to('#box2',{
    x: 300,
    duration: 3,
    delay: 1,
    repeat: -1,
    yoyo: true,
})

timeLine.to('#box3',{
    x: 300,
    rotate: 360,
    duration: 1.5,
    delay: 1,
})

timeLine.to('#box4',{
    x: 300,
    backgroundColor: 'yellow',
    duration: 1.5,
    
})

timeLine.to('#box5',{
    x: 300,
    scale:0.5,
    borderRadius: '50%',
    duration: 1.5,
  
    
})

var navTimeLine = gsap.timeline();

navTimeLine.from('h2',{
    y: -30,
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
})

navTimeLine.from('h4',{
    y: -30,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
})

timeLine.from('h1',{
    y: -30,
    duration: 0.5,
    opacity: 0,
    delay: 0.5,
    scale: 0.5,
})
