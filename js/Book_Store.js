//document.write("welcome from js")
window.onscroll = () => {
    if(window.scrollY > 80) 
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else 
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}
function loader()
{
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut()
{
    setTimeout(loader , 2200);
}
fadeOut();
window.onload = function() {
    if(window.scrollY > 80) 
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else 
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
searchForm =document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active')
}

/* to open signin page when we click on login btn  */
let loginForm = document.querySelector('.login-form-container')
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}
/* to close signin page when we click on login btn  */
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active')
}
