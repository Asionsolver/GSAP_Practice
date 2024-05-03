// gsap.from('.box1 .sub-box', {
//     duration: 2,  
//     opacity: 0, 
//     scale: 0, 
//     rotation: 360, 
//     delay: 1,
//     borderRadius: '10%',
// })

// gsap.from('.box2 .sub-box', {
//     duration: 1,  
//     opacity: 0, 
//     scale: 0, 
//     delay: 1,
//     borderRadius: '50%',
//     scrollTrigger: {
//         trigger: '.box2 .sub-box',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
      
//     }
// })

// gsap.from('.box2 h1', {
//     duration: 3, 
//     x: -500, 
//     opacity: 0, 
//     color: '#606c38',
//     delay: 1,
//     scrollTrigger: {
//         trigger: '.box2 h1',
//     }
// }) 
// gsap.from('.box2 p', {
//     duration: 3, 
//     x: 500, 
//     opacity: 0,
//     color: '#fb6f92',
//     delay: 1,
//     scrollTrigger: {
//         trigger: '.box2 p',
//     }
// })    


// gsap.from('.box3 .sub-box', {
//     duration: 1,  
//     opacity: 0, 
//     scale: 0, 
//     delay: 1,
//     borderRadius: '50%',
//     scrollTrigger: {
//         trigger: '.box3 .sub-box',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 30%',
//         scrub: 4,	
//         pin: true,
//     }
// })
// gsap.from('.box4 .sub-box', {
//     duration: 1,  
//     opacity: 0, 
//     scale: 0, 
//     delay: 1,
//     borderRadius: '50%',
//     scrollTrigger: {
//         trigger: '.box4 .sub-box',
//         scroller: 'body',
//         markers: true,
//         start: 'top 60%',
//         end: 'top 50%',
//         scrub: 4,	
//     }
// })

gsap.to('.page2 h1',{
    transform: 'translateX(-150%)',
    duration: 2,
      scrollTrigger:{
        trigger: '.page2',
        scroller: 'body',
        markers: true,
        start: 'top 0%',
        end: 'top -150%',
        scrub: 3,
        pin: true,
      }
})



