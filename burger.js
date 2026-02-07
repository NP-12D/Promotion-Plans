document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
  document.body.classList.toggle("no_scroll");
});
document.querySelector(".X").addEventListener("click", () => {
  document.querySelector("nav").classList.remove("active");
  document.body.classList.remove("no_scroll");
});
document.querySelector("main").addEventListener("click", () => {
  document.querySelector("nav").classList.remove("active");
  document.body.classList.remove("no_scroll");
});
document.querySelectorAll("nav a").forEach(link=>{link.addEventListener("click", () => {
  document.querySelector("nav").classList.remove("active");
  document.body.classList.remove("no_scroll");
});})
