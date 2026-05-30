// gsap.to(".box", {
//     y:500,
//     duration: 2,
//     delay: 1,
//     backgroundColor: "blue",
//     scale: 0.5,
//     rotate: 360,
//     borderRadius: "50%",
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// })

// gsap.to(".box2", {
//     y:500,
//     duration: 2,
//     delay: 3,
//     backgroundColor: "red",
//     scale: 0.5,
//     rotate: 360,
//     borderRadius: "50%",
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// })

// gsap.to(".box3", {
//     y:500,
//     duration: 2,
//     delay: 5,
//     backgroundColor: "blue",
//     scale: 0.5,
//     rotate: 360,
//     borderRadius: "50%",
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
// })

// with timeline

const tl = gsap.timeline()

tl.to(".box", {
    y:500,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    scale: 0.5,
    rotate: 360,
    borderRadius: "50%",
})


tl.to(".box2", {
    y:500,
    duration: 2,
    delay: 1,
    backgroundColor: "red",
    scale: 0.5,
    rotate: 360,
    borderRadius: "50%",
    ease: "bounce.out",
    repeat: 1,
})

tl.to(".box3", {
    y:500,
    duration: 2,
    delay: 1,
    backgroundColor: "blue",
    scale: 0.5,
    rotate: 360,
    borderRadius: "50%",
    ease: "bounce.out",
    repeat: -1,
    yoyo: true
})
