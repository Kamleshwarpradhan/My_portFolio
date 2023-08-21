const navbtn = document.getElementById("nav-btn");
const closebtn = document.getElementById("close-btn");
const navbar = document.getElementById("nav");
const sidebar = document.getElementById("sidebar")
navbtn.addEventListener("click",function(){
    sidebar.classList.add("show-sidebar");
});
closebtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
});

window.addEventListener("scroll",function(){
    if(window.pageYOffset>80){
      navbar.classList.add("navbar-fixed");
    }
    else{
      navbar.classList.remove("navbar-fixed");
    }
});

// document.addEventListener("DOMContentLoaded",function(){
//   const preloader = document.getElementById("preloader");
//   const preloader_svg = document.getElementById("preloader-svg");

//   const anim = anime.timeline({
//       // loop: true,
//       direction: 'alternate',
//       complete: function(){
//           preloader.classList.add("hide");
//       }
//   });

//   anim
//   .add({
//           targets: '#preloader-svg path',
//           strokeDashoffset: [anime.setDashoffset, 0],
//           easing: 'easeInOutQuart',
//           duration: 2000,
//           delay: function(el, i) { return i * 250 },
//   })
//   .add({
//           targets: '#preloader-svg #B',
//           duration: 1000,
//           opacity: 1,
//           easing: 'easeInOutQuart'
//   });
// })