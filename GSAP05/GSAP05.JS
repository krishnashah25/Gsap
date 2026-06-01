let tl = gsap.timeline()
let menu = document.querySelector(".nav i")
let close = document.querySelector(".box i")

tl.to(".box",{
    right: 0,
    duration: 0.7
})

tl.from(".box h4",{
    x: 150,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})

tl.from(".box i",{
    opacity: 0
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

close.addEventListener("click",()=>{
    tl.reverse()
})