const cards = document.querySelectorAll(".cardclick");

cards.forEach(card => {
    card.addEventListener("click", function () {
        window.location.href = "./blogdetail.html";
    });
});
