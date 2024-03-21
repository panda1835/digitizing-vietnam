var description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veniam eveniet, animi minima quo impedit dolore, maiores ducimus enim quidem soluta accusantium necessitatibus illum praesentium adipisci incidunt, voluptatum optio corrupti dignissimos voluptates rem ad! Sunt aspernatur velit eaque corporis voluptatum illum pariatur delectus ducimus autem molestias. Reprehenderit, enim. Iste quo suscipit aliquam adipisci qui quasi earum optio officia dolorum laudantium.'
var image_url = 'https://www.lrsoc.com/web/wp-content/uploads/2021/01/Placeholder-shop.jpg'
var collections = [
    {name: "Collection 1", description: description, imageUrl: image_url},
    {name: "Collection 2", description: description, imageUrl: image_url},
    {name: "Collection 3", description: description, imageUrl: image_url}
];

function loadCollections() {
    var container = document.getElementById('collectionContainer');
    container.innerHTML = ''; // Clear the container
    

    for (var i = 0; i < collections.length; i++) {
        var collection = collections[i];
        var html = 
            `<div class="flex flex-row items-center border-black border-2 rounded-lg mb-5 py-2 pr-10">
                <img class="w-44 h-32 mx-5" src="${collection.imageUrl}">
                <div class="">
                    <a href="./blog_post.html"><h2>Blog post name</h2></a>
                    <div class="text-gray-500 mb-2">mm/dd/yy - [author name]</div>
                    <div class="mb-2">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <a href="./blog_post.html" class="text-blue-600">Read more ...</a>
                </div>
            </div>`;
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