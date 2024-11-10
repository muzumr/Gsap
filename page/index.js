
gsap.from(" .content, .ptag", {
    x: '-100%',
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    delay: 1
});


gsap.from(".tag ,.description ", {
    x: '100%',
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
    delay: 1
});
