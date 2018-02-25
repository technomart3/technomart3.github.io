// for modal-info
var cart = document.querySelector(".modal-info");
var button_buy = Array.prototype.slice.call(document.querySelectorAll(".button-buy"));
var onClickButton = function(evt) {
  evt.preventDefault();
  document.querySelector(".modal-info").classList.add("modal-show");
}
button_buy.forEach(function(button) {
  button.addEventListener("click", onClickButton);
});

var cart_close = document.querySelector(".modal-close");
var buy_continue = document.querySelector(".continue");

cart_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	cart.classList.remove("modal-show");
});

buy_continue.addEventListener("click", function (evt) {
	evt.preventDefault();
	cart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (cart.classList.contains("modal-show")) {
    cart.classList.remove("modal-show");
  }
}
});