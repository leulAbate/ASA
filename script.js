let prevScrollpos = window.pageYOffset;
let navBar = document.querySelector(".scroll-hide");

window.onscroll = function() {
  // Check if screen width is larger than 850 pixels
  if (window.innerWidth > 1190) {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      navBar.classList.remove("scroll-show"); // swap class names
      navBar.classList.add("scroll-hide"); // swap class names
    } else {
      navBar.classList.remove("scroll-hide"); // swap class names
      navBar.classList.add("scroll-show"); // swap class names
    }

    prevScrollpos = currentScrollPos;
  }
};

function openModal(img) {
  // create a modal element
  var modal = document.createElement("div");
  modal.classList.add("modal");

  // create an image element inside the modal
  var modalImg = document.createElement("img");
  modalImg.src = img.src;

  // add the image to the modal
  modal.appendChild(modalImg);

  // add the modal to the document
  document.body.appendChild(modal);

  // add a click event listener to the modal, to close it when clicked
  modal.addEventListener("click", function() {
    modal.remove();
  });
}

function init() {
  initMap();
}

window.onload = init;
