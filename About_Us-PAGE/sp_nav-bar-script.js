


document.addEventListener('scroll', function() {
    if(window.scrollY >= 406){
      gsap.to('#quick-navi-pages',{
        position: 'relative',
        bottom:'60px',
      })  }


      else(
      gsap.to('#quick-navi-pages',{
        position: 'relative',
        bottom:'0px',
    })
      )
   

})
document.addEventListener('scroll', function() {
  
  if(window.scrollY >= 406){
   document.getElementById('logo-without-text').classList.remove('not-active-logo-cstm')
   }
 else( 
  document.getElementById('logo-without-text').classList.add('not-active-logo-cstm')
 )
  if(window.scrollY <= 406){
   document.getElementById('logo-with-text').classList.remove('not-active-logo-cstm')
   }
 else( 
  document.getElementById('logo-with-text').classList.add('not-active-logo-cstm')
 )

  })