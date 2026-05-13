async function main() {
    let r =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(r);
    let data = await r.json();
    console.log(data);
    return 67;
}
main();
