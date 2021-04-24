let dropdownBtn = document.querySelector(".menu-toggle");
let menuContent = document.querySelector(".nav-links");
dropdownBtn.addEventListener("click", () => {
  if (menuContent.style.display === "none") {
    menuContent.style.position = "absolute";
    menuContent.style.display = "grid";
  } else {
    menuContent.style.position = "relative";
    menuContent.style.display = "none";
  }
});
let scrollUp = document.querySelector(".index-scroll-up");
let scrollUpFull = document.querySelector(".index-scroll-up-full");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) &&
    document.documentElement.clientWidth < 501
  ) {
    scrollUp.style.display = "inherit";
    scrolllUpFull.style.display = "none";
  } else {
    scrollUp.style.display = "none";
    scrollUpFull.style.display = "none";
  }

  if (
    (document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600) &&
    document.documentElement.clientWidth > 510
  ) {
    scrollUp.style.display = "none";
    scrollUpFull.style.display = "inherit";
  } else {
    scrollUp.style.display = "none";
    scrollUpFull.style.display = "none";
  }
}

function changeFooter() {
  const footer = document.querySelector("footer");
  footer.firstElementChild.textContent = +"2021";
}
