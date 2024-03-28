var description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veniam eveniet, animi minima quo impedit dolore, maiores ducimus enim quidem soluta accusantium necessitatibus illum praesentium adipisci incidunt, voluptatum optio corrupti dignissimos voluptates rem ad! Sunt aspernatur velit eaque corporis voluptatum illum pariatur delectus ducimus autem molestias. Reprehenderit, enim. Iste quo suscipit aliquam adipisci qui quasi earum optio officia dolorum laudantium.'
var image_url = 'https://www.lrsoc.com/web/wp-content/uploads/2021/01/Placeholder-shop.jpg'
var collections = [
{name: "Nguyễn Khắc Viện", description: description, imageUrl: image_url},
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
            `<section class="collection">
            <a href="./collection.html"><h2>${collection.name}</h2></a>
            <div class="flex flex-row">
                <div class="">
                    <p>${collection.description}</p>
                    <p class="mt-5">
                        Explore <a class="text-blue-600 underline" href="./collection.html">${collection.name}</a>
                    </p>
                </div>
                <div>
                    <img class="feature-image" src="${collection.imageUrl}">
                </div>
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