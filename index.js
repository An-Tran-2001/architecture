const img_review = document.querySelector(".img-review");
const practice = document.querySelector(".process");
for (let i = 0; i < 400; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  img_review.appendChild(box);
}
background_animation();

let boxs = document.querySelectorAll(".box");
let count = 0;
let interval = setInterval(() => {
  boxs[count].classList.add("show");
  count++;
  if (count == boxs.length) {
    clearInterval(interval);
    document.querySelector(".slogan").classList.add("slg-animation");
    box_button();
    document.querySelector(".main").style.display = "block";
    document.querySelector(".nav__list").classList.add("nav__list-show");
    document
      .querySelector(".head_nav_link")
      .classList.add("head_nav_link-show");
  }
}, 5);

function background_animation() {
  const list_img_background = [
    "img/img-review-1.jpg",
    "img/img-review-2.jpg",
    "img/img-review-3.jpg",
    "img/img-review-4.jpg",
    "img/img-review-5.jpg",
    "img/img-review-6.jpg",
  ];
  let count = 0;
  const link_background = document.querySelectorAll(".box");
  let background_interval = setInterval(() => {
    link_background.forEach((value) => {
      value.style.background = "url(" + list_img_background[count] + ")";
      value.style.backgroundSize = "107vh 107vh";
      value.style.backgroundPosition = "center";
      value.style.backgroundAttachment = "fixed";
      value.style.backgroundRepeat = "no-repeat";
    });
    count++;
    if (count == list_img_background.length) {
      count = 0;
    }
  }, 5000);
}

let check_scroll = 0;
let process_list = document.querySelectorAll(".arrow");
let review_x_y = document.querySelector(".box-review");

document.addEventListener("scroll", () => {
  if (check_scroll > window.scrollY) {
    document.querySelector(".nav__list").classList.add("nav__list-show");
  } else {
    document.querySelector(".nav__list").classList.remove("nav__list-show");
    check_scroll = window.scrollY;
  }
  document.querySelector(".nav").classList.toggle("scroll", window.scrollY > 0);
  document
    .getElementById("logo")
    .classList.toggle("scroll-logo", window.scrollY > 0);
  document
    .getElementById("text-logo")
    .classList.toggle("scroll-text-logo", window.scrollY > 0);

  let count = 0;
  if (window.scrollY + window.innerHeight > practice.offsetTop + 50) {
    let interval_process = setInterval(() => {
      process_list[count].style.opacity = "1";
      count++;
      if (count == process_list.length) {
        clearInterval(interval_process);
        count = 0;
      }
    }, 350);
  }

  if (window.scrollY + window.innerHeight > review_x_y.offsetTop + 50) {
    review_x_y.classList.add("review-show");
  }
});

function box_button() {
  var a = 50;
  var c = document.querySelector(".box-button");
  var h = c.offsetHeight;
  var w = c.offsetWidth;
  var list = [
    [w, 0],
    [w, h + h / 2],
    [0, h + h / 2],
    [0, a],
    [a, 0],
  ];
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(a, 0);
  list.forEach((value) => {
    ctx.lineTo(value[0], value[1]);
  });
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.stroke();

  // button
  // document.querySelector('.button').addEventListener('click',()=>{});
}
