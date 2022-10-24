let movies = document.querySelector(".list");
let fragments = document.createDocumentFragment()

for (const move of moveis) {
    let template = document.querySelector(".template-movies").content.cloneNode(true);
    template.querySelector(".geners").textContent = move.genres;
    template.querySelector(".title").textContent = move.title;
    template.querySelector(".cast").textContent = move.cast.join(", ");
    template.querySelector(".geners").textContent = move.genres.join(", ");
    template.querySelector(".year").textContent = move.year;
    
    fragments.appendChild(template)
}
movies.appendChild(fragments);