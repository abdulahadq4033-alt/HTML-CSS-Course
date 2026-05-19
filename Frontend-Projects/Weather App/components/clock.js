function updateClock(){

    const clock =
    document.getElementById("clock");

    const now =
    new Date();

    let hours =
    now.getHours();

    let minutes =
    now.getMinutes();

    let seconds =
    now.getSeconds();

    const ampm =
    hours >= 12 ? "PM" : "AM";

    hours =
    hours % 12;

    if(hours === 0){
        hours = 12;
    }

    hours =
    hours.toString().padStart(2, "0");

    minutes =
    minutes.toString().padStart(2, "0");

    seconds =
    seconds.toString().padStart(2, "0");

    clock.innerText =
    `${hours}:${minutes}:${seconds} ${ampm}`;

}

updateClock();

setInterval(updateClock, 1000);