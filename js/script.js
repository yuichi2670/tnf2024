/**
|--------------------------------------------------
| fv オープニング
|--------------------------------------------------
*/
const fvSlides = document.querySelector(".js-header__slides");
const fvTitle = document.querySelector(".js-header__title");

gsap
  .timeline()
  .to(fvSlides, {
    autoAlpha: 1,
    visibility: "visible",
    duration: 0.3,
  })
  .to(
    fvTitle,
    {
      autoAlpha: 1,
      visibility: "visible",
      duration: 0.3,
    },
    "+=.8"
  );

/**
|--------------------------------------------------
| fvを隠すjs-sectionsの中に入ったら隠す
|--------------------------------------------------
*/
const header = document.querySelector(".js-header");
gsap.to(header, {
  autoAlpha: 0,
  visibility: "hidden",
  duration: 0.3,
  scrollTrigger: {
    trigger: ".js-sections",
    start: "top top",
    toggleActions: "play reverse play reverse",
  },
});

/**
|--------------------------------------------------
| 背景色の切り替え
|--------------------------------------------------
*/

const sectionColors = document.querySelectorAll(".js-color-change");
sectionColors.forEach((sectionColor) => {
  const sectionColorId = sectionColor.id;
  // アニメーション
  gsap.to("body", {
    delay: 0.1,
    duration: 0.1,
    ease: "Power1.easeInOut", // イージング関数を追加
    scrollTrigger: {
      trigger: sectionColor,
      start: "top bottom",
      toggleActions: "play reverse play reverse",
      // markers: true,
      toggleClass: {
        targets: [
          "body",
          // 追加のクラスやセレクタをここに追加
        ],
        className: sectionColorId,
      },
    },
  });
});

/**
|--------------------------------------------------
| 商品詳細項目の切り替え
|--------------------------------------------------
*/
// 各画像グループが画面最上部に来たら一致するIDのものを表示して、各画像グループの最下部が画面上部から消えたら消す

const photosDetail = document.getElementById("js-photos__detail");
const photoItems = document.querySelectorAll(".js-photos__items");
const photoContainer = document.querySelector(".js-photos__container");
const photoInfo = document.querySelector(".js-photos__info");

gsap.to(photoInfo, {
  autoAlpha: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: photoContainer,
    start: "bottom-=190px top",
    // markers: true,
    toggleActions: "play reverse play reverse",
  },
});

photoItems.forEach((item) => {
  const targetId = item.getAttribute("href");
  const photosDetail = document.querySelector(targetId);

  gsap.fromTo(
    photosDetail,
    {
      autoAlpha: 0,
      visibility: "hidden",
    },
    {
      autoAlpha: 1,
      visibility: "visible",
      duration: 0.3,
      scrollTrigger: {
        trigger: item,
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

/**
|--------------------------------------------------
| fvスライド
|--------------------------------------------------
*/
const swiperFv = new Swiper(".swiper-fv", {
  loop: true,
  speed: 2000, //追加（スライドスピード）
  effect: "fade",
  allowTouchMove: false, //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
  direction: 'horizontal'
});

/**
|--------------------------------------------------
| 各modalのスライド 
|--------------------------------------------------
*/
const swiper = new Swiper(".swiper2023", {
  loop: true,
  speed: 2000, //追加（スライドスピード）
  effect: "fade",
  allowTouchMove: false, //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".p-modal__pagination",
    clickable: true,
  },
});

const swiper02 = new Swiper(".swiper2022", {
  loop: true,
  speed: 2000, //追加（スライドスピード）
  effect: "fade",
  allowTouchMove: false, //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".p-modal__pagination",
    clickable: true,
  },
});

const swiper03 = new Swiper(".swiper2021", {
  loop: true,
  speed: 2000, //追加（スライドスピード）
  effect: "fade",
  allowTouchMove: false, //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".p-modal__pagination",
    clickable: true,
  },
});

/**
|--------------------------------------------------
| product line-up
|--------------------------------------------------
*/

// GSAPのトゥイーンを作成します
const unisexTl = gsap.timeline();
unisexTl.fromTo('.js-product__unisex li', {
  y: 6,
  autoAlpha: 0
}, {
  y: 0,
  autoAlpha: 1,
  stagger: {
    each: 0.15
  }
});

// ScrollTriggerを使ってトゥイーンを発火させます
ScrollTrigger.create({
  trigger: '.js-product__unisex',
  start: 'top 80%', // トリガーの表示位置を調整するために調整してください
  once: true, 
  animation: unisexTl,
});

const kidsTl = gsap.timeline();
kidsTl.fromTo('.js-product__kids li', {
  y: 6,
  autoAlpha: 0
}, {
  y: 0,
  autoAlpha: 1,
  stagger: {
    each: 0.15
  }
});

// ScrollTriggerを使ってトゥイーンを発火させます
ScrollTrigger.create({
  trigger: '.js-product__kids',
  start: 'top 80%', // トリガーの表示位置を調整するために調整してください
  once: true, 
  animation: kidsTl,
});

/**
|--------------------------------------------------
| フェードイン
|--------------------------------------------------
*/

const fades = document.querySelectorAll(".js-fade");
fades.forEach((fade) => {
  gsap.fromTo(
    fade,
    {
      autoAlpha: 0,
      y: 20,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 1.2,
      scrollTrigger: { trigger: fade, start: "top bottom" },
    }
  );
});


var lookItems = document.querySelector('.p-photos__block');
lookItems.addEventListener('scroll', function() {
  var scrollableHeight = lookItems.scrollHeight - lookItems.clientHeight;
  var currentScroll = lookItems.scrollTop;
  if (currentScroll > scrollableHeight + 10) {
    lookItems.classList.add('is-scroll-fixed');
  } else {
    lookItems.classList.remove('is-scroll-fixed');
  }
});

/**
|--------------------------------------------------
| 過去記事のポップアップ
|--------------------------------------------------
*/
jQuery(function ($) {
  //ポップアップ2023
  $(function () {
    $("#js-openModal-2023").click(function () {
      $(".js-modalArea-2023").addClass("is-open--2023");
      $("body").addClass("is-fade-stop");
    });
    $("#js-closeModal-2023, #js-modalBg-2023").click(function () {
      $(".js-modalArea-2023").removeClass("is-open--2023");
      $("body").removeClass("is-fade-stop");
    });
  });

  //ポップアップ2022
  $(function () {
    $("#js-openModal-2022").click(function () {
      $("#js-modalArea-2022").addClass("is-open--2022");
      $("body").addClass("is-fade-stop");
    });
    $("#js-closeModal-2022, #js-modalBg-2022").click(function () {
      $("#js-modalArea-2022").removeClass("is-open--2022");
      $("body").removeClass("is-fade-stop");
    });
  });

  //ポップアップ2022
  $(function () {
    $("#js-openModal-2021").click(function () {
      $("#js-modalArea-2021").addClass("is-open--2021");
      $("body").addClass("is-fade-stop");
    });
    $("#js-closeModal-2021, #js-modalBg-2021").click(function () {
      $("#js-modalArea-2021").removeClass("is-open--2021");
      $("body").removeClass("is-fade-stop");
    });
  });
});

const setFillHeight = () => {
  const vh = window.innerHeight * 0.01; //ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
  document.documentElement.style.setProperty("--vh", `${vh}px`); //カスタム変数--vhの値をドキュメントのルートに設定
};

window.addEventListener("resize", setFillHeight); //画面のサイズ変動があった時に高さを再計算
setFillHeight();
