"use strict";
const movieReview = JSON.parse(localStorage.getItem("review"));
const main = document.querySelector("#main2");
const lastEl = movieReview.slice(-1);
const topPart = document.querySelector(".top-part");


for (let i of lastEl) {
    const div = document.createElement("div");
    div.classList.add("review-movie")
    div.innerHTML = i;
    main.appendChild(div);
}


const movieTitle = document.querySelector(".movie-title");







const comment = document.querySelector(".com");
const sendBtn = document.querySelector(".send");
const comText = document.querySelector(".comment-text");
const comContainer = document.querySelector(".com-container");

sendBtn.addEventListener("click", function(){
    const txt = comment.value;
    const com = `
        <div class="all-com">
            <div class="com-left">
                <img src="img/com.png" alt="">
            </div>
            <div class="com-right">
                <span class="comment-text">${txt}</span>
            </div>
        </div>
    `
    comContainer.innerHTML += com;
    comment.value = "";
})











if (movieTitle.textContent === "Orphan: First Kill") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/_uX6of3vBu0" title="ORPHAN: FIRST KILL | Official Trailer | Paramount Movies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Fullmetal Alchemist: The Final Alchemy") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/cqj4u6eyDq8" title="Fullmetal Alchemist The Revenge of Scar / The Final Alchemy | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Hocus Pocus 2") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/idc0EOmKr30" title="Hocus Pocus 2 | Official Trailer | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Project Gemini") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/_415zVD7R6E" title="Project Gemini Trailer (2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Bullet Train") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/0IOsk2Vlc4o" title="BULLET TRAIN - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp
}

else if (movieTitle.textContent === "Fall") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/aa5MXOMN1lM" title="FALL Official Trailer (2022)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Athena") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/ahBOK08eosA" title="ATHENA | Official Teaser | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.innerHTML === "Secret Headquarters") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/JR2hwFpllz4" title="Secret Headquarters | Official Trailer | Paramount+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.innerHTML === "The Infernal Machine") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/q0vrecpxXZU" title="THE INFERNAL MACHINE | Official Trailer | Paramount Movies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Monster High: The Movie") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/Ghz0V5LegzI" title="Monster High: The Movie - FULL TRAILER! | Monster High" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Pinocchio") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/gV_0pYoCssc" title="Trailer 2 | Pinocchio | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Halloween Ends") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/i_mAWKyfj6c" title="Halloween Ends - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Werewolf by Night") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/bLEFqhS5WmI" title="Marvel Studios’ Special Presentation: Werewolf By Night | Official Trailer | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.innerHTML === "Lou") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/QILhvR4QPsQ" title="Lou | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Smile") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/BcDK7lkzzsU" title="Smile | Official Trailer (2022 Movie)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Beast") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/oQMc7Sq36mI" title="Beast |     Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    ` 
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Paws of Fury: The Legend of Hank") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/A_hkjvjx2ek" title="Paws of Fury: The Legend of Hank | Official Trailer (2022 Movie) – Paramount Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "After Ever Happy") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/TlAukkPK-dc" title="After Ever Happy | Official Trailer | Prime Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent === "Thor: Love and Thunder") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/Go8nTmfrQd8" title="Marvel Studios' Thor: Love and Thunder | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
} else if (movieTitle.textContent == "DC League of Super-Pets") {
    const tmp = `
    <iframe width="949" height="534" src="https://www.youtube.com/embed/1jkw2JPCl18" title="DC LEAGUE OF SUPER-PETS – Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    topPart.innerHTML += tmp;
}