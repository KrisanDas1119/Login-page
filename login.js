const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
const btnLogin= document.querySelector('.login-btn');
const iconClose= document.querySelector('.icon-close');

registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});

btnLogin.addEventListener("click", ()=>{
    wrapper.classList.add("active-btn");
});

iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-btn");
});