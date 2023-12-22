console.log('custom-menu-script-connected')


const menu_container = document.getElementById('menu-parent-container')

const menu_close_btn = document.getElementById('menu-close-button')


function menu_close (){
    console.log('clicked')
    gsap.to(menu_container,{
        top:'-150%',
        opacity:.7,
        scrub:3
    })
}
function menu_open (){
    gsap.to(menu_container,{
        top:'0%',
        opacity:1,
        scrub:3
    })
}


function open_cart() {
    gsap.to('#cart-parent-container',{
        top:'0%',
        right:'0%',
        opacity:1,
        scrub:3
    })
}
function close_cart() {
    gsap.to('#cart-parent-container',{
        top:'0%',
        right:'-140%',
        opacity:.7,
        scrub:3
    })
}

// menu_close_btn.addEventListener('onclick',()=>{
// alert('re')
// })