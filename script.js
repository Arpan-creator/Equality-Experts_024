document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    //  calendar and form submission logic...
});

//login -signup logic 

import { fetchData } from "./utils/fetchData.js";
// let container = document.getElementById("container")
let signup = document.getElementById("signup-btn")
let login = document.getElementById("login-btn")
let loggedUser = document.getElementById("loggedUsername")
let isLogged = JSON.parse(localStorage.getItem("isLogged")) || false

const showData = async (URL)=>{
    let dataArr = await fetchData(URL)


    if(isLogged){
       loggedUser.innerHTML = isLogged.username
       login.innerHTML = "Log out"
       signup.style.display='none';
       login.addEventListener("click" , ()=>{
         localStorage.removeItem('isLogged')
       })
    }

    
}



showData('http://localhost:3000/users')
showData('http://localhost:3000/admin')

signup.addEventListener("click" , ()=>{
    window.location.href = "./pages/signup.html"
})

login.addEventListener("click" , ()=>{
    window.location.href = "./pages/login.html"
})