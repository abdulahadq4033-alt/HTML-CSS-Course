document.title = "DOM Manipulation";
alert(document.title);
alert(document.URL);
console.log(document.body);
// console.log(document.head);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
document.body.style.backgroundColor = "lightblue";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";
// location.href = "https://www.google.com";
window.open("https://www.google.com", "_blank");
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);