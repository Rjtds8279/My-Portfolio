var typed = new Typed(".typewriter-text",
    {
        strings: [
            "Data Analyst",

            "Web Developer",

            "Designer",

            "Freelancer",
            
            "Software Engineer"
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop:true
        
    }
)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// var typed = new Typed('.typewriter-text', {
//     strings: ["Web Developer", "Java Developer", "App Developer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
//   });  