// Write a program to load a javascript file in a broswer using promises. Use .then() to display an alert once the file is loaded.
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.appendChild(script);
    });
}

loadScript('https://code.jquery.com/jquery-3.6.0.min.js')
    .then(() => {
        alert('Script loaded successfully!');
    })
    .catch((error) => {
        console.error(error);
    });
