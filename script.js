let elShowBtn = document.querySelector(".show-modal");
let elModal = document.querySelector(".modal");
let elOverlay = document.querySelector(".overlay");
let elCloseBtn = document.querySelector(".close-modal");

const openModal = function () {
  elModal.classList.remove("hidden");
  elOverlay.classList.remove("hidden");
};

const closeModal = function () {
  elModal.classList.add("hidden");
  elOverlay.classList.add("hidden");
};

elShowBtn.addEventListener("click", openModal);

elOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    closeModal();
  }
});

elCloseBtn.addEventListener("click", closeModal);
