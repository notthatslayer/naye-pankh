function reveal() {
  document.querySelectorAll(".fade").forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
function done(){
  alert("Thank you for joining She Can Foundation! :)");
  return false;
}