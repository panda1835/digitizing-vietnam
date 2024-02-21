var description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veniam eveniet, animi minima quo impedit dolore, maiores ducimus enim quidem soluta accusantium necessitatibus illum praesentium adipisci incidunt, voluptatum optio corrupti dignissimos voluptates rem ad! Sunt aspernatur velit eaque corporis voluptatum illum pariatur delectus ducimus autem molestias. Reprehenderit, enim. Iste quo suscipit aliquam adipisci qui quasi earum optio officia dolorum laudantium.'
var image_url = 'https://www.lrsoc.com/web/wp-content/uploads/2021/01/Placeholder-shop.jpg'
var collections = [
{name: "Collection 1", description: description, imageUrl: image_url},
{name: "Collection 2", description: description, imageUrl: image_url},
{name: "Collection 3", description: description, imageUrl: image_url}
// ... more collections
];

function loadCollections() {
    var container = document.getElementById('collectionContainer');
    container.innerHTML = ''; // Clear the container
    
    for (var i = 0; i < collections.length; i++) {
        var collection = collections[i];
        var html = 
            `<section class="intro-section">
            <div class="intro-text">
                <h2>${collection.name}</h2>
                <p>${collection.description}</p>
                <p></p>
                <p>
                    Explore <a href="./collection.html">${collection.name}</a>
                </p>
            </div>
            <div>
                <img class="feature-image" src="${collection.imageUrl}">
            </div>
            </section>
            <hr>`;
        container.innerHTML += html;
    }
}
function viewMoreCollections() {
// Simulate adding new collections
var newCollections = [
    {name: "Collection 4", description: description, imageUrl: image_url},
    {name: "Collection 5", description: description, imageUrl: image_url},
    {name: "Collection 6", description: description, imageUrl: image_url}
];

collections = collections.concat(newCollections);
loadCollections();
}

document.getElementById('viewMore').addEventListener('click', viewMoreCollections);

// Call the function to load collections
loadCollections();