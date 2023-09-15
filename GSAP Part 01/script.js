// A single animation like this is called a 'tween'. This tween is saying "hey GSAP, animate the element with a class of '.box' to an x of 700px (like transform: translateX(700px))". We've got a method, a target and a vars object which contains information about the animation

// gsap.to() - This is the most common type of tween. A .to() tween will start at the element's current state and animate "to" the values defined in the tween.

// gsap.to("#box", {
//   x: 700,
//   y:300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

//gsap.from() - Like a backwards .to() where it animates "from" the values defined in the tween and ends at the element's current state.

// gsap.from("#box", {
//   x: 700,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.to("h1,h2,h3", {
//     x:300,
//     color: 'black',
//     duration: 1,
//     delay: 1,
//     scale: 0.5,
//     stagger: 1,
//     repeat:1,
//     yoyo: true
// });

var time1 = gsap.timeline()

time1.to("h1",{
    x:300,
    duration:1
}
);

time1.to("h2",{
    x:400,
    duration:1
}
);

time1.to("h3",{
    x:500,
    duration:1
}
);
