// Change color of Navbar items when scrolling to the corresponding section
let sections = document.querySelectorAll(".section");
let itemNav = document.querySelectorAll("nav li a");
let footer = document.querySelector(".footer");

window.onscroll = function () {
  sections.forEach((section, index) => {
    let a = itemNav[index];
    a.classList.remove("active");
    let sectionTop = section.offsetTop - 100;
    let sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
      a.classList.add("active");
    }
  });
  // Check if scrolled to the end of the page (footer)
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    itemNav.forEach(a => a.classList.remove("active"));
    itemNav[itemNav.length - 1].classList.add("active");
  }
  else {
    itemNav[itemNav.length - 1].classList.remove("active");
  }
};


// Make Filter
let morePhoto = document.querySelector(".bu-more");
let photos = Array.from(document.querySelectorAll(".not-active"));
let boxes = document.querySelectorAll(".our-work .con-box");
let secFilter = document.querySelectorAll(".our-work ul li");

secFilter.forEach((bu) => {
  bu.addEventListener("click", (event) => {
    remove.call(event.target);
    management.call(event.target);
  });
});

function remove() {
  // remove the active class from list fo items and make current item is active
  secFilter.forEach((bu) => {
    bu.classList.remove("active");
    this.classList.add("active");
  });
}

function management() {
  // hidden all boxes and display the boxes corresponding option
  boxes.forEach((box) => {
    box.style.display = "none";
  });

  document.querySelectorAll(this.dataset.work).forEach((box) => {
    morePhoto.dataset.work = this.dataset.work;
    if (!box.classList.contains("not-active")) {
      box.style.display = "block";
    }
  });
}

// Display more photo
morePhoto.addEventListener("click", (event) => {
  document.querySelectorAll(event.target.dataset.work).forEach((box) => {
    if (box.classList.contains("not-active")) photos.pop(box);
    box.style.display = "block";
    box.classList.remove("not-active");
  });
  if (photos.length == 0) morePhoto.style.opacity = "0";
});

// Update Date Auto for copyright
let date = document.querySelector(".Date");
let year = new Date();
date.innerHTML = year.getFullYear();
