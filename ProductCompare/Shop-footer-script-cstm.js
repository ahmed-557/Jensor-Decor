const footer_animations=gsap.timeline({
    scrollTrigger: {
        trigger: "#section9-footer-parent",
        scrub: 2,
        // markers: true,
        start: "0% 50%",
        end: "100% 100%"
    }
})

footer_animations.to('#logo-without-text',{
    position:'relative',
    transform: 'translate(547px,160px)',
    width: '20vw',
    filter: 'invert(1)'
})

// footer navigation menu

const section9_footer_navi_tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section9-footer-parent",
        scrub: 2,
        // markers: true,
        start: "0% 50%",
        end: "70% 100%"
    }
})

section9_footer_navi_tl.from(".section9-footer-left-list-item",{
  position:'relative',
  left:'-200',
  stagger: 1
},'footer-list-navi')

section9_footer_navi_tl.from(".section9-footer-right-list-item",{
  position:'relative',
  left:'200',
  stagger: 1
},'footer-list-navi')

const footer_short_about_and_copyright_animation = new SplitType('#footer-short-about-and-copyright-animation')

gsap.from('#footer-short-about-and-copyright-animation .word',{
    opacity:0,
    stagger:.05,
})