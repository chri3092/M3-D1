/* 1 EXTRA */

window.onload = function () {
    const removeTwitter = document.querySelector('aside div:nth-child(3) li:nth-child(2)')

    removeTwitter.remove()
    
    /* 2 EXTRA */

    const links = document.querySelectorAll('.jumbotron a, .stretched-link')
    
    console.log(links)
    
    for(const link of links) {
        link.addEventListener("click", function (event){
            console.log(event.target)

            /* event.target.parentNode.remove() */

            event.target.closest('.row, .jumbotron').remove()
        })
    }

    /* 3 EXTRA */

    const autorsSelect = document.querySelectorAll('.blog-post p.blog-post-meta a')

    console.log(autorsSelect)

    for (const autor of autorsSelect) {
        autor.addEventListener("mouseover", function (event){
            alert(event.target.innerText)
        })
    }
}


    
    




