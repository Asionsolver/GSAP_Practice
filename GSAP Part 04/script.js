var tl = gsap.timeline();

function time(){
    var loader = 0
    setInterval(function() {
        loader =loader +  Math.floor(Math.random()*20)
        if(loader<100){
            document.querySelector(".loader h1").innerHTML  = loader +"%"
        }else{
            loader = 100;
            document.querySelector(".loader h1").innerHTML  = loader +"%";
        }
    }, 150);
}


tl.to(".loader h1",{
    scale: 2,
    duration: 1,
    delay: 0.5,  
    onStart:time(),
})

tl.to(".loader",{
    top:"-100vh",
    // duration: 1,
    delay: 0.5,  
    
})
gsap.to(".page-1 h1",{
    transform: "translateX(-100%)",
    fontWeight: 100,
    scrollTrigger:{
        trigger:".page-1",
        scroller:"body",
        markers: true,
        start:"top 0",
        end: "top -200%",
        scrub:2,
        pin:true,

    }
})