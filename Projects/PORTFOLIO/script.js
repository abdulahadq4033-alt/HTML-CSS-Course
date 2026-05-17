window.addEventListener("load", function(){
    const loader = document.getElementById("loading-screen");
    setTimeout(function(){
        loader.classList.add("fade-out");
    }, 2000);

});


function showTab(tabId){
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
}