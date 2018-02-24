// for blocker(map)
var link = document.querySelector(".map");
var map_window = document.querySelector(".blocker");
var close = map_window.querySelector(".popup-close");
var window_click_close = document.querySelector(".blocker");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	map_window.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	map_window.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (map_window.classList.contains("modal-show")) {
    map_window.classList.remove("modal-show");
  }
}
});

window_click_close.addEventListener("click", function (evt) {
	map_window.classList.remove("modal-show");
});

// for modal
var write = document.querySelector(".write-us");
var popup = document.querySelector(".modal");
var lever_popup = document.querySelector(".button-close");

write.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
});

lever_popup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("popup-show");
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show");
  }
}
});

// for modal-i
var buy = document.querySelector('.button-buy');
var cart = document.querySelector(".modal-info");

buy.addEventListener("click", function (evt) {
	evt.preventDefault();
	cart.classList.add("info-show");
});

