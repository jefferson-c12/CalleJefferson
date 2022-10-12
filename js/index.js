let contenedor = document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h2>UserID:${item.userId}</h2>
        <p>${item.title}</p>
        `;
        contenedor.append(div)
    });
})
.catch(error => console.log (error));