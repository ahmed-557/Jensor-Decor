
gsap.from('*',{
    opacity:.3,
    stagger:.007
})

const section1_about_heading_split = new SplitType('#section1_about_heading')

const about_section1_tl = gsap.timeline({scrollTrigger:{
    trigger:'#section1_parent_container',
// markers: true,
start: '53% 50%',
end: '140% 50%',
scrub: 2,
pin: true
}})





about_section1_tl.to('#section1_about_heading .char',{
    transform: 'translateY(-200px)',
    stagger: .5,

},

about_section1_tl.to('.section1_landingimage_container img ',{
    width: '99vw',
    delay:2,
        duration:3.5,
    transform: 'translateY(0px)',
    stagger: .5,

},

)

)

const Short_intro_top_h1_heading_text_split = new SplitType(`.Short_intro_top h1`)
const Short_intro_bottom_h1_heading_text_split = new SplitType(`.Short_intro_bottom h1`)
const Short_intro_top_h6_heading_text_split = new SplitType(`.Short_intro_top h6`)

const Short_intro_top_heading_text_split_Animation_tl = gsap.timeline({scrollTrigger:{
    trigger:'#section2_parent_container',
// markers: true,
start: '0% 45%',
end: '60% 50%',
scrub: 2,
}})

Short_intro_top_heading_text_split_Animation_tl.from('.Short_intro_top h6 .char',{
    scale : .7,
    opacity:.1,
    stagger:.1
},"connect")
Short_intro_top_heading_text_split_Animation_tl.from('.Short_intro_top h1 .char',{
    scale : .8,
    opacity:.1,
    stagger:.1
},"connect")
Short_intro_top_heading_text_split_Animation_tl.from('.Short_intro_bottom .char',{
    scale : .8,
    opacity:.1,
    stagger:.1
},"connect")





const Short_intro_detailed_para = new SplitType(`.Short_intro_center p`)

const section2_Short_intro_Animation_tl = gsap.timeline({scrollTrigger:{
    trigger:'#section2_parent_container',
// markers: true,
start: '50% 50%',
end: '150% 50%',
scrub: 2,
pin: true
}})

section2_Short_intro_Animation_tl.to(".Short_intro_top",{
top:'-50%',
duration:3
},
section2_Short_intro_Animation_tl.to(".Short_intro_bottom",{
bottom:'-50%',
duration:3
}),
section2_Short_intro_Animation_tl.from(".Short_intro_center p",{
    transform: 'translateY(200px)'
    },
    section2_Short_intro_Animation_tl.from(".Short_intro_center .line",{
        opacity:.1,
stagger:.4
        }
        )

))


const about_section_animation_tl = gsap.timeline({scrollTrigger:{
    trigger:'#section3_about_parent_container',
// markers: true,
start: '00% 50%',
end: '80% 90%',
scrub: 2,
}})

about_section_animation_tl.to('.about_images_container img',{
    stagger:.5,
    opacity:1,
    scale:1
})
about_section_animation_tl.to('.section3_about_right_container h4, .section3_about_right_container p',{
    stagger:.5,
    opacity:1,
})
