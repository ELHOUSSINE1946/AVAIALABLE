const burger = document.querySelector('.burger') ;
const menu   = document.querySelector('.menu') ;
const nav    = document.getElementsByTagName('nav')
const links  = document.querySelectorAll('.menu li') ;
const cen   = document.querySelector('.centered') ;




burger.addEventListener("click" ,  function show(){
      //menu toggle

      menu.classList.toggle('menu-active') ;
        
      // burgr Toggle

      burger.classList.toggle('active') ;

      // lis animation 

      links.forEach(function(link , i){
        if(link.style.animation ){
          link.style.animation = "" ;
        }else{
          links[i].style.animation = "movin 1s ease forwards "+i/5 +"s" ;
        }
      });    
        cen.classList.toggle('shorted') ;
});


var top = window.scrollY ;
if (top >= "12vh"){
  nav.style.background = "pink" ;
}






