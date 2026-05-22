let b = document.getElementById("btn");
b.addEventListener("click", ()=>{
    alert("DONT TOUCH ME");
    document.querySelector(".box").innerHTML='<b> why did you touch the button </b>';
})
