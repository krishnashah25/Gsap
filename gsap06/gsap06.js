let tl = gsap.timeline({paused : true})

tl.to(".__box .overlay",{
    opacity:1,
    x:0,
    y:0,
    duration:1,
    stagger :  0.3,
    ease:"power3.out"
})

tl.to(" .icon ",{
    opacity:1,
    x:0,
    durationd:0.3,
},"-=0.2")

document.querySelector(".view_box_element").addEventListener("mouseenter",()=>{
    tl.play()
})

document.querySelector(".view_box_element").addEventListener("mouseleave",()=>{
    tl.reverse()
})