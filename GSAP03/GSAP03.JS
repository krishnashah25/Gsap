let intialpath = `M 20 100 Q 375 100, 730 100`
let finalvalpath = `M 20 100 Q 375 100, 730 100 `

let string = document.querySelector("#box")

string.addEventListener("mousemove", function (dets) {
    intialpath = `M 20 100 Q ${dets.x} ${dets.y}, 730 100`

    gsap.to("svg path",{
        attr : {d : intialpath},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path ",{
        attr : { d : finalvalpath },
        duration: 1.5,
        ease:"elastic.out(1,0.2)"
    })
})