function createCard(name, channel, views, time, photo) {
    let div = document.createElement("div");
    div.className = "card";

    let viewsstr;

    if (views >= 1000000) {
        viewsstr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewsstr = (views / 1000).toFixed(1) + "K";
    } else {
        viewsstr = views;
    }

    div.innerHTML = `
        <img src="${photo}" alt="thumbnail">
        <div class="title">${name}</div>
        <div class="info">${channel} • ${viewsstr} views • ${time}</div>
    `;

    document.body.appendChild(div);
}

createCard(
    "Marcos",
    "TGgaming",
    100000000,
    "9 months ago",
    "https://i.pinimg.com/736x/38/05/45/380545b19cdca4b161c412891cf3a068.jpg"
);