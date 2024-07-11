ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh",
        scale: 6,
        yPercent: -50,
    }),
    scrub: 1,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
})

const tl = gsap.timeline({
    scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: "#popcornStart",
        start: "top bottom",
        endTrigger: "#popcornStop",
        end: "top center",
        ease: "ease-out",
        pin: true,
    }
})

tl.from("#popcorn", {
    y: "-20vh",
    scale: 3,
    yPercent: 50,
})
tl.to(".content", {
    scale: 2,
})