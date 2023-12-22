
function mainhomepage_animation_Landingpage_text() {


    let main_homepage_top_heading_landingpage = new SplitType('#homepage-heading-animation-section1-top-heading')
    let main_homepage_bottom_heading_landingpage = new SplitType('#homepage-heading-animation-section1-bottom-heading')
    // const main_homepage_animation_landingpage = document.getElementById('')

    gsap.to('#homepage-heading-animation-section1-top-heading .char', {
        y: 0,
        stagger: .08,
        duration: .1
    })
    gsap.to('#homepage-heading-animation-section1-bottom-heading .char', {
        opacity: 1,
        stagger: .2,
        duration: .2
    })
}

mainhomepage_animation_Landingpage_text()


function mainhomepage_animation() {



    let homepageanimationtimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#homepage-heading-animation-section1-main",
            scrub: 1,
            pin: true,
            // markers: true,
            start: "45% 50%",
            end: "100% 50%"

        }
    })

    homepageanimationtimeline.to(" #homepage-heading-animation-section1-top", {

        top: "-50%"
    },
        homepageanimationtimeline.to("#homepage-heading-animation-section1-bottom", {

            bottom: "-58%"
        }))
}
mainhomepage_animation()


function mainhomepage_animation_afterreveal() {


    let animation_afterreveal = gsap.timeline({
        scrollTrigger: {
            trigger: "#homepage-heading-animation-section1-center",
            scrub: 1,
            // markers: true,
            start: "45% 50%",
            end: "100% 50%"

        }
    })
    animation_afterreveal.from('#homepage-heading-animation-section1-center', {

        scale: .5,
    })
    animation_afterreveal.from('.image-slider-overtext-cstm-styl', {

        marginBottom: -200,
    },
        animation_afterreveal.from('.image-slider-overtext-cstm-styl h1', {

            opacity: 0,

        },
            animation_afterreveal.from('.image-slider-overtext-cstm-styl p', {
                marginBottom: -250,
                opacity: 0,

            },
            )))
}

mainhomepage_animation_afterreveal()


function section_3_about() {



    const section_3_about_tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-3-about-us-parent-container",
            scrub: 2,
            // markers: true,
            start: "50% 100%",
            end: "100% 100%",
        }
    })

    const section_3_about_Para = new SplitType('#section-3-about-Para')
    const section_3_about_heading = new SplitType('#section-3-about-heading')

    section_3_about_tl.from('#section-3-left-image-1', {

        opacity: 0,
    })
    section_3_about_tl.from('#section-3-left-image-2', {
        opacity: 0,
    })
    gsap.from('#section-3-about-Para .word, #section-3-about-heading .word', {
        opacity: 0,
        stagger: 2,
        scrollTrigger: {
            trigger: "#section-3-about-us-parent-container",
            scrub: 2,
            start: "50% 100%",
            end: "100% 100%",
        }
    })

}
section_3_about()



function Custom_drag_csur() {


    let section4_container = document.getElementById('section-4-recent-products-slider-container')

    const drag_cusr = document.getElementById('custom_drag_cursor')

    section4_container.addEventListener('mouseenter', () => {
        gsap.to(drag_cusr, {
            opacity: 1,
            scale: 1,
        })
    })
    section4_container.addEventListener('mouseleave', () => {

        gsap.to(drag_cusr, {
            opacity: 0,
            scale: 0,
        })

    })

    section4_container.addEventListener('mousemove', (t) => {
        gsap.to(drag_cusr, {
            left: t.x - 50,
            top: t.y - 50
        })

    })
}
Custom_drag_csur()


function Category_slider_homepage() {
    const section5_catagory_slider_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section5-parent-container-catagory',
            // markers:true,
            pin: true,
            start: '50% 50%',
            end: "450% 50%",
            scrub: 2


        }
    })

    section5_catagory_slider_tl.to('#section5-second-slider-parent-container-catagory', {

        transform: 'translateX(-4500px)'
    })
}
Category_slider_homepage()



function Custom_drag_csur_recent_products() {


    let section6_container = document.getElementById('section-6-products-slider-container')

    const drag_cusr1 = document.getElementById('custom_drag_cursor1')

    section6_container.addEventListener('mouseenter', () => {
        gsap.to(drag_cusr1, {
            opacity: 1,
            scale: 1,
        })
    })
    section6_container.addEventListener('mouseleave', () => {

        gsap.to(drag_cusr1, {
            opacity: 0,
            scale: 0,
        })

    })

    section6_container.addEventListener('mousemove', (t) => {
        gsap.to(drag_cusr1, {
            left: t.x - 50,
            top: t.y - 50
        })

    })
}
Custom_drag_csur_recent_products()

function Email_hover_box_animation_Group() {


    const Email_hover_box_animation = gsap.timeline({
        scrollTrigger: {
            trigger: "#section8-container",
            scrub: 2,
            // markers: true,
            start: "60% 80%",
            end: "150% 100%",
        }
    })
    Email_hover_box_animation.to('.overflow-box-email', {
        transform: 'translateY(-200px)'
    })
}
Email_hover_box_animation_Group()

function Section4_Recent_products_animation_gruop() {
   
const recent_products_cards_animation_tl = gsap.timeline({scrollTrigger:{
    trigger:'#section-4-recent-products-parent-container',
    start: '-20% 60%',
    end: '70% 100%',
    // markers: true,
    scrub:1
}})

recent_products_cards_animation_tl.from('.section-4-recent-product-heading',{
  transform:'translateY(-50px)'
})

recent_products_cards_animation_tl.from('#section-4-recent-products-slider-container .drag-product-slider-home',{
    opacity:0,
    scale:.8,
    stagger: 1,
}) 
}
Section4_Recent_products_animation_gruop()


function Section6_products_animation_gruop() {
   
    const section6_products_cards_animation_tl = gsap.timeline({scrollTrigger:{
        trigger:'#section-6-products-parent-container',
        start: '-20% 60%',
        end: '70% 100%',
        // markers: true,
        scrub:1
    }})
    
   section6_products_cards_animation_tl.from('.section-6-recent-product-heading',{
      transform:'translateY(-50px)'
    })
    
    section6_products_cards_animation_tl.from('#section-6-products-slider-container .drag-product-slider-home',{
        opacity:0,
        scale:.8,
        stagger: 1,
    }) 
    }
    Section6_products_animation_gruop()