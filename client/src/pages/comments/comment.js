"use strict"

function showComments(){
    fetch("https://portfolio-project-er06.onrender.com/persons/")
    .then(response => response.json())
    .then(data => {
        data.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('card', 'text-center', 'mb-4');

            commentElement.innerHTML = `
                <div class="card-header">
                    <h2 class="card-title">${comment.name}</h2>
                    <p class="card-subtitle">${comment.email}</p>
                </div>
                <div class="card-body">
                    <p class="card-text">${comment.body}</p>
                </div>
            `;

            document.getElementById("comments").appendChild(commentElement);
        });
    })
    .catch(error => console.error(error))
}