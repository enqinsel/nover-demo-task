const sub = document.querySelectorAll(".faq__dropdown-sub");
const answer = document.querySelectorAll(".faq__dropdown-answer");
const icon = document.querySelectorAll(".faq__dropdown-icon");
const item = document.querySelectorAll(".faq__dropdown-item");

for (let i = 0; i < sub.length; i++) {
  sub[i].addEventListener("click", (event) => {
    const isOpened = answer[i].classList.toggle("faq__dropdown-answer-opened");

    // Eğer açılır menü açıksa, ikonu arrowup.svg yap, aksi takdirde arrowdown.svg yap
    icon[i].src = isOpened
      ? "../images/arrowup.svg"
      : "../images/arrowdown.svg";

    item[i].style.backgroundColor = isOpened
      ? "rgba(218, 242, 251, 1)"
      : "rgba(204, 204, 204, 0.3)";
  });
}

const downloadButton = document.querySelector(
  ".nav__content-left-slogan button"
);

const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

// Uygulamayı İndir butonuna tıklanınca popup açılır
downloadButton.addEventListener("click", () => {
  popup.style.display = "block";
});

// Kapatma düğmesine tıklanınca popup kapanır
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Popup dışındaki siyah arka plana tıklanınca popup kapanır
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// Klavyeden Escape tuşuna basınca da popup kapanır
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.style.display = "none";
  }
});

const button = document.querySelector(".homeblog__button");

button.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
