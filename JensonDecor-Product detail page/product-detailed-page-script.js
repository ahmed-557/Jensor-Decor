
var swipercstm = new Swiper('.swiper-1-cstm-js', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  on: {
    resize: function () {
      swipercstm.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

var swiper2 = new Swiper('.swiper-cstm-scrpt', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  on: {
    resize: function () {
      swiper2.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

gsap.from('body',{
  opacity:0,
  stagger:2,
  duration:2,
})