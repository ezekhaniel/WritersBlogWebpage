document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: "Post Title 1", summary: "Summary of post 1..." },
        { title: "Post Title 2", summary: "Summary of post 2..." }
    ];

    const mainSection = document.querySelector("main > section");

    // Dynamically add posts to the section
    posts.forEach(post => {
        const article = document.createElement("article");
        article.innerHTML = `<h3>${post.title}</h3><p>${post.summary}</p>`;
        mainSection.appendChild(article);
    });
});
