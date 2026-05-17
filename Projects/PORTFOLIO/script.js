window.addEventListener("load", function(){
    const loader = document.getElementById("loading-screen");
    setTimeout(function(){
        loader.classList.add("fade-out");
    }, 2000);
});