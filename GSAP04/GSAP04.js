let main = document.querySelector(".container")
let cursor = document.querySelector(".box")
let iamgediv = document.querySelector(".image")

main.addEventListener("mousemove",function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})

iamgediv.addEventListener("mouseenter",() => {
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor : "#fffff8a"
    })
})

iamgediv.addEventListener("mouseleave",() => {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor : "#fff"
    })
})