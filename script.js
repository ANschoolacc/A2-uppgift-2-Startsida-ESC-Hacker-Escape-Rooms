document.querySelector(".topCont__menuBtn").addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector(".menuCont").classList.add("menuCont--open");
  }, 150);

  document.querySelector(".body").classList.add("body--openMenu");

  document.querySelector(".fadeWhite").classList.add("fadeWhite--active");
});

document.querySelector(".menuCont__close").addEventListener("click", () => {
  document.querySelector(".menuCont").classList.remove("menuCont--open");

  document.querySelector(".body").classList.remove("body--openMenu");

  document.querySelector(".fadeWhite").classList.remove("fadeWhite--active");
});
