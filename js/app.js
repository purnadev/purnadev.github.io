let home = document.getElementById('home');
let about = document.getElementById('about');
let work = document.getElementById('work');
let blog = document.getElementById('blog');
let about_me = document.getElementById('about_me');

var scrollpos = window.scrollY;
// var header = document.getElementById("header");
let fixed = document.getElementById('fixed');
// let top_1=document.getElementById("top_1");
console.log("top_1");

function add_class_on_scroll() {
    fixed.classList.add("header_a");
    // top_1.classList.add("top_1");

}

// function remove_class_on_scroll() {
//     header.classList.remove("fade-in");
// }

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 100){
        add_class_on_scroll();
    }
    else {
        fixed.classList.remove("header_a");
    }
    // console.log(scrollpos);
});

// if(screen.height == 50){
//   fixed.className = ".header_a";
// }

home.addEventListener("click",()=>{
     home.className="active";
       about.className = "";
       work.className="";
    blog.className="";
        
});
about.addEventListener("click",()=>{
    home.className="";
    about.className = "active";
    work.className="";
    blog.className="";
//     about_me.scrollIntoView({
//   behavior: 'smooth'
// });
  gsap.to(window, {duration: 2, scrollTo:"#about_me",ease:"power4"});
        

})
work.addEventListener("click",()=>{
    home.className="";
    work.className="active";
    blog.className="";
       about.className = "";
        console.log("d")
  gsap.to(window, {duration: 2, scrollTo:"#works",ease:"power4ease"});


})
blog.addEventListener("click",()=>{
    home.className="";
    work.className="";
    blog.className="active";
       about.className = "";
        console.log("d")

});
