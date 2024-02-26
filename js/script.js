/**
|--------------------------------------------------
| fv オープニング
|--------------------------------------------------
*/
const fvTitle = document.querySelector(".js-header__title");

gsap.timeline().to(
  fvTitle,
  {
    autoAlpha: 1,
    visibility: "visible",
    duration: 0.3,
  },
  "+=1"
);

/**
|--------------------------------------------------
| fvを隠すjs-sectionsの中に入ったら隠す
|--------------------------------------------------
*/
const header = document.querySelector(".js-header");
ScrollTrigger.create ({
  trigger:header,
  start: 'top top',
  end: "+=100%",
  pinSpacing: false,
  pin: true,
  markers: true,
})



/**
|--------------------------------------------------
| 商品詳細項目の切り替え
|--------------------------------------------------
*/
// 各画像グループが画面最上部に来たら一致するIDのものを表示して、各画像グループの最下部が画面上部から消えたら消す

const photosDetail = document.getElementById("js-photos__detail");
const photoItems = document.querySelectorAll(".js-photos__items");
const photoInfo = document.querySelector(".js-photos__info");
const photoBlocks = document.querySelector(".js-photos__block");
const photoChild = document.querySelectorAll(".js-photos__child");

photoItems.forEach((item) => {
  const targetId = item.getAttribute("href");
  const photosDetail = document.querySelector(targetId);

  gsap.to(photoInfo, {
    autoAlpha: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: photoBlocks,
      start: "bottom-=190px top",
      // markers: true,
      toggleActions: "play reverse play reverse",
    },
  });
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
      pin: true,
      scrollTrigger: {
        trigger: item,
        start: "top top",
        // end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

if (window.innerWidth >= 768) {
  ScrollTrigger.create({
    trigger: photoBlocks,
    start: "top top",
    pin: true,
    end: "+=300%", // 100%スクロールしたらピン留めを終了
    markers: true,
    onEnter: () => {
      photoBlocks.classList.remove('is-snap-off');
    },
    onLeaveBack: () => { // トリガーを離れる際のアクション
      photoBlocks.classList.add('is-snap-off');
    }
  });
}




/**
|--------------------------------------------------
| fvスライド
|--------------------------------------------------
*/

const swiperFv = new Swiper(".swiper-fv", {
  //fadeを有効にすることでスライダーが全て重なり合った状態になる
  effect: "fade",
  loop: true,
  //fadeの切り替えは必要ないのでspeedは0s
  speed: 0,
  autoplay: {
    delay: 4000,
    duration: 1,
    //ドラッグで切り替えた後に自動再生が止まらないようにするにはfalse
    disableOnInteraction: false,
  },
  //ドラッグで切り替えたくない場合はfalse
  allowTouchMove: false,
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
unisexTl.fromTo(
  ".js-product__unisex li",
  {
    y: 6,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
    stagger: {
      each: 0.15,
    },
  }
);

// ScrollTriggerを使ってトゥイーンを発火させます
ScrollTrigger.create({
  trigger: ".js-product__unisex",
  start: "top 80%", // トリガーの表示位置を調整するために調整してください
  once: true,
  animation: unisexTl,
});

const kidsTl = gsap.timeline();
kidsTl.fromTo(
  ".js-product__kids li",
  {
    y: 6,
    autoAlpha: 0,
  },
  {
    y: 0,
    autoAlpha: 1,
    stagger: {
      each: 0.15,
    },
  }
);

// ScrollTriggerを使ってトゥイーンを発火させます
ScrollTrigger.create({
  trigger: ".js-product__kids",
  start: "top 80%", // トリガーの表示位置を調整するために調整してください
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
| archiveのフェードイン
|--------------------------------------------------
*/
var fadeIn = $(".c-fade");
$(window).on("scroll", function () {
  $(fadeIn).each(function () {
    var offset = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > offset - windowHeight + 50) {
      $(this).addClass("c-fade__in");
    }
  });
});

var photosBlocks = document.querySelector('.js-photos__block');
photosBlocks.addEventListener('scroll', function() {
  var scrollableHeight = photosBlocks.scrollHeight - photosBlocks.clientHeight;
  var currentScroll = photosBlocks.scrollTop;
  if (currentScroll > scrollableHeight + 10) {
    photosBlocks.classList.add('is-scroll-fixed');
  } else {
    photosBlocks.classList.remove('is-scroll-fixed');
  }
});
var photosBlocksBack = document.querySelector('.js-information');
// スクロール時の処理
window.addEventListener('scroll', function() {
  // 要素の位置情報を取得
  var rect = photosBlocksBack.getBoundingClientRect();
  // 画面の高さ
  var windowHeight = window.innerHeight;
  // 要素のtopが画面の真下にきたかどうかを判定
  var isPhotosBlocksBackAtBottom = rect.top + 1 <= windowHeight;
  if (isPhotosBlocksBackAtBottom) {
    // p-look__goodsが画面の真下にきたときの処理
    console.log('p-look__goodsが画面に表示されました。');
    photosBlocks.classList.add('is-scroll-fixed');
  } else {
    console.log('p-look__goodsが画面から消えました。');
    photosBlocks.classList.remove('is-scroll-fixed')
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
