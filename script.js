// A single animation like this is called a 'tween'. This tween is saying "hey GSAP, animate the element with a class of '.box' to an x of 700px (like transform: translateX(700px))". We've got a method, a target and a vars object which contains information about the animation

gsap.to("#box", {
    x:700,
    duration: 2,
    delay: 1,
    backgroundColor: 'blue',
    rotate: 360,
    scale: 0.5
});