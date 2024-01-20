
document.addEventListener('DOMContentLoaded', function () {
    const navbtn = document.querySelector(".navbar-toggler");
    navbtn.addEventListener("click",()=>{
        navbtn.classList.add("rm-outline");
        console.log("click");
    });
});