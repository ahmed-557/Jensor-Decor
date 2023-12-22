
document.addEventListener('scroll', function() {
  
    if(window.scrollY >= 115){
     document.getElementById('logo-without-text').classList.remove('not-active-logo-cstm')
     }
   else( 
    document.getElementById('logo-without-text').classList.add('not-active-logo-cstm')
   )
    if(window.scrollY <= 115){
     document.getElementById('logo-with-text').classList.remove('not-active-logo-cstm')
     }
   else( 
    document.getElementById('logo-with-text').classList.add('not-active-logo-cstm')
   )
  
    })