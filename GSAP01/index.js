gsap.from(".page1 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from(".page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:".page2 .box"
})

gsap.from(".page3 .box",{
    scale:0,
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2
    }
})


gsap.from(".page5 .text .h3",{
    duration:1,
    x:500,
    scrollTrigger:{
        trigger:".page5 .text",
        scroller:"body",
        markers:true,
        start:"top 55%"
    }
})


gsap.from(".page5 .text .h2",{
    scale:0,
    duration:1,
    x:-500,
    scrollTrigger:{
        trigger:".page5 .text",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})

gsap.from("#page4 h2",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})