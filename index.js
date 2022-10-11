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
    document.getElementById("footer").classList.add("footer-show");
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

// link room slide
const link_slide = document.querySelectorAll(".link-room");
const box_room_container = document.querySelector(".box-room-container");
const room_slide = document.querySelector(".box-room-items");
let boxCurrentIndex = 0;
link_slide.forEach((element, index) => {
  element.onclick = () => {
    box_room_container.scrollLeft +=
      room_slide.clientWidth * (index - boxCurrentIndex);
    boxCurrentIndex = index;
    link_slide.forEach((element, index) =>
      element.classList.toggle("room-active", boxCurrentIndex === index)
    );
  };
});
// living_room_slide
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slide-item");
const slideThumbnails = document.querySelectorAll(".list_pic_livingroom li");
let currentIndex = 0;
const prevSlide = document.querySelectorAll(".button_slide_design_home_left");
const nextSlide = document.querySelectorAll(".button_slide_design_home_right");

prevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      slideContainer.scrollLeft -= slide.clientWidth;
      if (currentIndex > 0) {
        currentIndex -= 1;
        slideThumbnails.forEach((element, index) =>
          element.classList.toggle("active-slide-show", currentIndex === index)
        );
      } else {
        currentIndex = slideThumbnails.length - 1;
        slideContainer.scrollLeft = slideContainer.scrollWidth;
        slideThumbnails.forEach((element, index) =>
          element.classList.toggle("active-slide-show", currentIndex === index)
        );
      }
    })
);

nextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      slideContainer.scrollLeft += slide.clientWidth;
      if (currentIndex < slideThumbnails.length - 1) {
        currentIndex += 1;
        slideThumbnails.forEach((element, index) =>
          element.classList.toggle("active-slide-show", currentIndex === index)
        );
      } else {
        currentIndex = 0;
        slideContainer.scrollLeft = 0;
        slideThumbnails.forEach((element, index) =>
          element.classList.toggle("active-slide-show", currentIndex === index)
        );
      }
    })
);

slideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    slideContainer.scrollLeft += slide.clientWidth * (index - currentIndex);
    currentIndex = index;
    slideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", currentIndex === index)
    );
  };
});

const sildeAuto = setInterval(() => {
  slideContainer.scrollLeft += slide.clientWidth;
  if (currentIndex < slideThumbnails.length - 1) {
    currentIndex += 1;
    slideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", currentIndex === index)
    );
  } else {
    slideContainer.scrollLeft = 0;
    currentIndex = 0;
    slideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", currentIndex === index)
    );
  }
}, 5000);
// bedrooom slide
const bedroomSlideContainer = document.querySelector(
  ".bedroom-slide-container"
);
const bedroomSlideThumbnails = document.querySelectorAll(
  ".list_pic_bedroom li"
);
const bedroomPrevSlide = document.querySelectorAll(
  ".bedroom_button_slide_design_home_left"
);
const bedroomNextSlide = document.querySelectorAll(
  ".bedroom_button_slide_design_home_right"
);
let bedroomCurrentIndex = 0;

bedroomPrevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      bedroomSlideContainer.scrollLeft -= slide.clientWidth;
      if (bedroomCurrentIndex > 0) {
        bedroomCurrentIndex -= 1;
        bedroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bedroomCurrentIndex === index
          )
        );
      } else {
        bedroomCurrentIndex = bedroomSlideThumbnails.length - 1;
        bedroomSlideContainer.scrollLeft = bedroomSlideContainer.scrollWidth;
        bedroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bedroomCurrentIndex === index
          )
        );
      }
    })
);

bedroomNextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      bedroomSlideContainer.scrollLeft += slide.clientWidth;
      if (bedroomCurrentIndex < bedroomSlideThumbnails.length - 1) {
        bedroomCurrentIndex += 1;
        bedroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bedroomCurrentIndex === index
          )
        );
      } else {
        bedroomCurrentIndex = 0;
        bedroomSlideContainer.scrollLeft = 0;
        bedroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bedroomCurrentIndex === index
          )
        );
      }
    })
);

bedroomSlideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    bedroomSlideContainer.scrollLeft +=
      slide.clientWidth * (index - bedroomCurrentIndex);
    bedroomCurrentIndex = index;
    bedroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bedroomCurrentIndex === index
      )
    );
  };
});

const bedroomSildeAuto = setInterval(() => {
  bedroomSlideContainer.scrollLeft += slide.clientWidth;
  if (bedroomCurrentIndex < bedroomSlideThumbnails.length - 1) {
    bedroomCurrentIndex += 1;
    bedroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bedroomCurrentIndex === index
      )
    );
  } else {
    bedroomSlideContainer.scrollLeft = 0;
    bedroomCurrentIndex = 0;
    bedroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bedroomCurrentIndex === index
      )
    );
  }
}, 5000);
// kitchen slide
const kitchenSlideContainer = document.querySelector(
  ".kitchen-slide-container"
);
const kitchenSlideThumbnails = document.querySelectorAll(
  ".list_pic_kitchen li"
);
const kitchenPrevSlide = document.querySelectorAll(
  ".kitchen_button_slide_design_home_left"
);
const kitchenNextSlide = document.querySelectorAll(
  ".kitchen_button_slide_design_home_right"
);
let kitchenCurrentIndex = 0;
kitchenPrevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      kitchenSlideContainer.scrollLeft -= slide.clientWidth;
      if (kitchenCurrentIndex > 0) {
        kitchenCurrentIndex -= 1;
        kitchenSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            kitchenCurrentIndex === index
          )
        );
      } else {
        kitchenCurrentIndex = kitchenSlideThumbnails.length - 1;
        kitchenSlideContainer.scrollLeft = kitchenSlideContainer.scrollWidth;
        kitchenSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            kitchenCurrentIndex === index
          )
        );
      }
    })
);
kitchenNextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      kitchenSlideContainer.scrollLeft += slide.clientWidth;
      if (kitchenCurrentIndex < kitchenSlideThumbnails.length - 1) {
        kitchenCurrentIndex += 1;
        kitchenSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            kitchenCurrentIndex === index
          )
        );
      } else {
        kitchenCurrentIndex = 0;
        kitchenSlideContainer.scrollLeft = 0;
        kitchenSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            kitchenCurrentIndex === index
          )
        );
      }
    })
);
kitchenSlideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    kitchenSlideContainer.scrollLeft +=
      slide.clientWidth * (index - kitchenCurrentIndex);
    kitchenCurrentIndex = index;
    kitchenSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        kitchenCurrentIndex === index
      )
    );
  };
});
const kitchenSildeAuto = setInterval(() => {
  kitchenSlideContainer.scrollLeft += slide.clientWidth;
  if (kitchenCurrentIndex < kitchenSlideThumbnails.length - 1) {
    kitchenCurrentIndex += 1;
    kitchenSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        kitchenCurrentIndex === index
      )
    );
  } else {
    kitchenSlideContainer.scrollLeft = 0;
    kitchenCurrentIndex = 0;
    kitchenSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        kitchenCurrentIndex === index
      )
    );
  }
}, 5000);
// bathroom slide
const bathroomSlideContainer = document.querySelector(
  ".bathroom-slide-container"
);
const bathroomSlideThumbnails = document.querySelectorAll(
  ".list_pic_bathroom li"
);
const bathroomPrevSlide = document.querySelectorAll(
  ".bathroom_button_slide_design_home_left"
);
const bathroomNextSlide = document.querySelectorAll(
  ".bathroom_button_slide_design_home_right"
);
let bathroomCurrentIndex = 0;
bathroomPrevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      bathroomSlideContainer.scrollLeft -= slide.clientWidth;
      if (bathroomCurrentIndex > 0) {
        bathroomCurrentIndex -= 1;
        bathroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bathroomCurrentIndex === index
          )
        );
      } else {
        bathroomCurrentIndex = bathroomSlideThumbnails.length - 1;
        bathroomSlideContainer.scrollLeft = bathroomSlideContainer.scrollWidth;
        bathroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bathroomCurrentIndex === index
          )
        );
      }
    })
);
bathroomNextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      bathroomSlideContainer.scrollLeft += slide.clientWidth;
      if (bathroomCurrentIndex < bathroomSlideThumbnails.length - 1) {
        bathroomCurrentIndex += 1;
        bathroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bathroomCurrentIndex === index
          )
        );
      } else {
        bathroomCurrentIndex = 0;
        bathroomSlideContainer.scrollLeft = 0;
        bathroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            bathroomCurrentIndex === index
          )
        );
      }
    })
);
bathroomSlideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    bathroomSlideContainer.scrollLeft +=
      slide.clientWidth * (index - bathroomCurrentIndex);
    bathroomCurrentIndex = index;
    bathroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bathroomCurrentIndex === index
      )
    );
  };
});
const bathroomSildeAuto = setInterval(() => {
  bathroomSlideContainer.scrollLeft += slide.clientWidth;
  if (bathroomCurrentIndex < bathroomSlideThumbnails.length - 1) {
    bathroomCurrentIndex += 1;
    bathroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bathroomCurrentIndex === index
      )
    );
  } else {
    bathroomSlideContainer.scrollLeft = 0;
    bathroomCurrentIndex = 0;
    bathroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        bathroomCurrentIndex === index
      )
    );
  }
}, 5000);
// anotherroom slide
const anotherroomSlideContainer = document.querySelector(
  ".anotherroom-slide-container"
);
const anotherroomSlideThumbnails = document.querySelectorAll(
  ".list_pic_anotherroom li"
);
const anotherPrevSlide = document.querySelectorAll(
  ".another_button_slide_design_home_left"
);
const anotherNextSlide = document.querySelectorAll(
  ".another_button_slide_design_home_right"
);
let anotherroomCurrentIndex = 0;
anotherPrevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      anotherroomSlideContainer.scrollLeft -= slide.clientWidth;
      if (anotherroomCurrentIndex > 0) {
        anotherroomCurrentIndex -= 1;
        anotherroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            anotherroomCurrentIndex === index
          )
        );
      } else {
        anotherroomCurrentIndex = anotherroomSlideThumbnails.length - 1;
        anotherroomSlideContainer.scrollLeft =
          anotherroomSlideContainer.scrollWidth;
        anotherroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            anotherroomCurrentIndex === index
          )
        );
      }
    })
);
anotherNextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      anotherroomSlideContainer.scrollLeft += slide.clientWidth;
      if (anotherroomCurrentIndex < anotherroomSlideThumbnails.length - 1) {
        anotherroomCurrentIndex += 1;
        anotherroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            anotherroomCurrentIndex === index
          )
        );
      } else {
        anotherroomCurrentIndex = 0;
        anotherroomSlideContainer.scrollLeft = 0;
        anotherroomSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            anotherroomCurrentIndex === index
          )
        );
      }
    })
);
anotherroomSlideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    anotherroomSlideContainer.scrollLeft +=
      slide.clientWidth * (index - anotherroomCurrentIndex);
    anotherroomCurrentIndex = index;
    anotherroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        anotherroomCurrentIndex === index
      )
    );
  };
});
const anotherroomSildeAuto = setInterval(() => {
  anotherroomSlideContainer.scrollLeft += slide.clientWidth;
  if (anotherroomCurrentIndex < anotherroomSlideThumbnails.length - 1) {
    anotherroomCurrentIndex += 1;
    anotherroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        anotherroomCurrentIndex === index
      )
    );
  } else {
    anotherroomSlideContainer.scrollLeft = 0;
    anotherroomCurrentIndex = 0;
    anotherroomSlideThumbnails.forEach((element, index) =>
      element.classList.toggle(
        "active-slide-show",
        anotherroomCurrentIndex === index
      )
    );
  }
}, 5000);
// home slide
const homeSlideContainer = document.querySelector(".home-slide-container");
const homeSlideThumbnails = document.querySelectorAll(".list_pic_home li");
const slideHome = document.querySelector(".box_slide_pic_home_design_item");
const homePrevSlide = document.querySelectorAll(
  ".home_button_slide_design_home_left"
);
const homeNextSlide = document.querySelectorAll(
  ".home_button_slide_design_home_right"
);
let homeCurrentIndex = 0;
homePrevSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      homeSlideContainer.scrollLeft -= slideHome.clientWidth;
      if (homeCurrentIndex > 0) {
        homeCurrentIndex -= 1;
        homeSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            homeCurrentIndex === index
          )
        );
      } else {
        homeCurrentIndex = homeSlideThumbnails.length - 1;
        homeSlideContainer.scrollLeft = homeSlideContainer.scrollWidth;
        homeSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            homeCurrentIndex === index
          )
        );
      }
    })
);
homeNextSlide.forEach(
  (btn) =>
    (btn.onclick = () => {
      homeSlideContainer.scrollLeft += slideHome.clientWidth;
      if (homeCurrentIndex < homeSlideThumbnails.length - 1) {
        homeCurrentIndex += 1;
        homeSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            homeCurrentIndex === index
          )
        );
      } else {
        homeCurrentIndex = 0;
        homeSlideContainer.scrollLeft = 0;
        homeSlideThumbnails.forEach((element, index) =>
          element.classList.toggle(
            "active-slide-show",
            homeCurrentIndex === index
          )
        );
      }
    })
);
homeSlideThumbnails.forEach((element, index) => {
  element.onclick = () => {
    homeSlideContainer.scrollLeft +=
      slideHome.clientWidth * (index - homeCurrentIndex);
    homeCurrentIndex = index;
    homeSlideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", homeCurrentIndex === index)
    );
  };
});
const homeSildeAuto = setInterval(() => {
  homeSlideContainer.scrollLeft += slideHome.clientWidth;
  if (homeCurrentIndex < homeSlideThumbnails.length - 1) {
    homeCurrentIndex += 1;
    homeSlideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", homeCurrentIndex === index)
    );
  } else {
    homeSlideContainer.scrollLeft = 0;
    homeCurrentIndex = 0;
    homeSlideThumbnails.forEach((element, index) =>
      element.classList.toggle("active-slide-show", homeCurrentIndex === index)
    );
  }
}, 5000);
 const slideImg = document.querySelector(".slide-img-row");
// const SlideAuto = setInterval(() => {
//   slideImg.scrollBy(0, 10);
// }, 100);
var processScroll = true;
const pageScroll = () => {
  slideImg.scrollBy(0, 1);
  if (slideImg.scrollTop >= slideImg.scrollHeight - slideImg.clientHeight) {
    slideImg.scrollTop = 0;
  }
  setTimeout(pageScroll, 30);
}
pageScroll()