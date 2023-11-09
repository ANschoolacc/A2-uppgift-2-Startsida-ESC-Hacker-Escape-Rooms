/*Eventlistener that reacts to click on menu lines in mobilemode */
document.querySelector(".topCont__menuBtn").addEventListener("click", () => {
  /*Waits 130 ms and then adds class to element */
  setTimeout(() => {
    document.querySelector(".menuCont").classList.add("menuCont--open");
  }, 130);

  /*Adds class to element */
  document.querySelector(".body").classList.add("body--openMenu");
  /*Adds class to element */
  document.querySelector(".fadeWhite").classList.add("fadeWhite--active");

  /*Eventlistener that reacts to the X symbol in overlaymenu */
  document.querySelector(".menuCont__close").addEventListener("click", () => {
    /*Removes class from element */
    document.querySelector(".menuCont").classList.remove("menuCont--open");
    /*Removes class from element */
    document.querySelector(".body").classList.remove("body--openMenu");
    /*Removes class from element */
    document.querySelector(".fadeWhite").classList.remove("fadeWhite--active");
  });
});
