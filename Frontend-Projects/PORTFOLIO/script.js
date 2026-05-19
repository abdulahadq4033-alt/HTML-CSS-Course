window.addEventListener("load", function(){
    const loader = document.getElementById("loading-screen");
    if(loader){
        setTimeout(function(){
            loader.classList.add("fade-out");
        }, 2000);
    }
    const closeBtn = document.querySelector(".close-popup");
    if(closeBtn){
        closeBtn.addEventListener("click", closePopup);
    }
});

function showTab(tabId){
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
    const navLinks = document.querySelectorAll(".navigationbar a");
    navLinks.forEach(link => {
        link.classList.remove("active");
    });
    event.target.classList.add("active");
}
function openPopup(){
    document.getElementById("contact-popup").classList.add("active");
}
function closePopup(){
    document.getElementById("contact-popup").classList.remove("active");
}
window.addEventListener("click", function(e){
    const popup = document.getElementById("contact-popup");
    if(e.target === popup){
        closePopup();
    }
});