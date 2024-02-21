
function generate_header(){
    var header = document.getElementById('navigation-bar');
    header.innerHTML = 
    `<div class="nav-bar">
    <div class="header">
        <a href="./index.html" class="header-link"><h1 class="two-line-header">Digitizing<br>Vietnam</h1></a>
    </div>
    <ul class="nav-links">
        <li class="section-link">
            <a href="./index.html">Home<a>
        </li>
        <li class="section-link">
            <a href="./about_us.html">About Us<a>
        </li>
        <li class="section-link">
            <a href="./our_collections.html">Our Collections<a>
        </li>
        <li class="section-link">
            <a href="./blogs.html">Blogs<a>
        </li>
        <li class="section-link">
            <a href="">EN/VI<a>
        </li>
    </ul>
    </div>`
}

function generate_footer(){
    var footer = document.getElementById('footer');
    footer.innerHTML = 
    `<div class="contact-section">
        <img class="institution-image" src="https://www.lrsoc.com/web/wp-content/uploads/2021/01/Placeholder-shop.jpg">
        <div class="contact-info">
            <h2>Contact Us</h2>
            <p>Email: ...</p>
        </div>
    </div>`
}

generate_header()
generate_footer()