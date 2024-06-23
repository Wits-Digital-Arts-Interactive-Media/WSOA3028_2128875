document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
        <nav id="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blogs</a></li>
                <li><a href="design.html">Design</a></li>
                <li><a href="essay.html">Essay</a></li>
                <li><a href="Profile.html">Profile</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});

