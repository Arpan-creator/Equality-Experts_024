

let prev_btn=document.querySelector("#prev_btn")
let next_btn=document.querySelector("#next_btn")
let feedbackinnercard1=document.querySelector("#feedbackinnercard1")
let feedbackinnercard2=document.querySelector("#feedbackinnercard2")
let feedbackinnercard3=document.querySelector("#feedbackinnercard3")



let count=1


const nextcard=()=>{
    if(count<3){
        prev_btn.style.backgroundColor="black"
        
        if (count==1){
            
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"
            
        }
        if (count==2){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="relative"
            feedbackinnercard3.style.visibility="visible"
            next_btn.style.backgroundColor="gray"

            
        }
        count++
        console.log(count)
        
    }
}

const previouscard=()=>{
    if (count>1){
        next_btn.style.backgroundColor="black"
        if (count==3){
            feedbackinnercard1.style.position="absolute"
            feedbackinnercard1.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard2.style.position="relative"
            feedbackinnercard2.style.visibility="visible"


            

        }
        if (count==2){
            feedbackinnercard2.style.position="absolute"
            feedbackinnercard2.style.visibility="hidden"
            feedbackinnercard3.style.position="absolute"
            feedbackinnercard3.style.visibility="hidden"
            feedbackinnercard1.style.position="relative"
            feedbackinnercard1.style.visibility="visible"
            prev_btn.style.backgroundColor="gray"

        }
        count--
        console.log(count)

    }
}

prev_btn.addEventListener("click",previouscard)
next_btn.addEventListener("click",nextcard)
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

