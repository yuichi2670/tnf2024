

/**
|--------------------------------------------------
| snap（PC時）
|--------------------------------------------------
*/

var lookItems = document.querySelector('.js-snap');

lookItems.addEventListener('scroll', function() {
  var scrollableHeight = lookItems.scrollHeight - lookItems.clientHeight;
  var currentScroll = lookItems.scrollTop;
  if (currentScroll > scrollableHeight + 10) {
    lookItems.classList.add('is-scroll-fixed');
  } else {
    lookItems.classList.remove('is-scroll-fixed');
  }
});

var element = document.querySelector('.js-snap-finish');
// スクロール時の処理
window.addEventListener('scroll', function() {
  // 要素の位置情報を取得
  var rect = element.getBoundingClientRect();
  // 画面の高さ
  var windowHeight = window.innerHeight;
  // 要素のtopが画面の真下にきたかどうかを判定
  var isElementAtBottom = rect.top + 1 <= windowHeight;
  if (isElementAtBottom) {
    // p-look__goodsが画面の真下にきたときの処理
    console.log('p-look__goodsが画面に表示されました。');
    lookItems.classList.add('is-scroll-fixed');
  } else {
    console.log('p-look__goodsが画面から消えました。');
    lookItems.classList.remove('is-scroll-fixed')
  }
});
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
window.addEventListener('scroll', function() {
  var hiddenElements = document.querySelectorAll('.js-hidden');
  var header = document.querySelector('.js-header');
  var shouldBeHidden = false;
  hiddenElements.forEach(function(element) {
      var elementTop = element.getBoundingClientRect().top;
      if (elementTop <= 0) {
          shouldBeHidden = true;
      }
  });
  if (shouldBeHidden) {
      header.classList.add('is-hidden');
  } else {
      header.classList.remove('is-hidden');
  }
});



// ScrollTrigger.create({
//   trigger: header,
//   start: "top top",
//   end: "+=100%",
//   pinSpacing: false,
//   pin: true,
//   // markers: true,
// });

/**
|--------------------------------------------------
| 商品詳細項目の切り替え
|--------------------------------------------------
*/
// 各画像グループが画面最上部に来たら一致するIDのものを表示して、各画像グループの最下部が画面上部から消えたら消す

document.addEventListener("DOMContentLoaded", function () {
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
          // end: "top top",
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );


    // if (window.innerWidth >= 768) {
    // gsap.fromTo(
    //   photosDetail,
    //   {
    //     autoAlpha: 0,
    //     visibility: "hidden",
    //   },
    //   {
    //     autoAlpha: 1,
    //     visibility: "visible",
    //     duration: 0.3,
    //     pin: true,
    //     scrollTrigger: {
    //       trigger: item,
    //       start: "top top",
    //       end: "bottom -99%",
    //       // markers: true,
    //       toggleActions: "play reverse play reverse",
    //     },
    //   }
    // );
    // } else {
    //   gsap.fromTo(
    //     photosDetail,
    //     {
    //       autoAlpha: 0,
    //       visibility: "hidden",
    //     },
    //     {
    //       autoAlpha: 1,
    //       visibility: "visible",
    //       duration: 0.3,
    //       pin: true,
    //       scrollTrigger: {
    //         trigger: item,
    //         start: "top top",
    //         // end: "top top",
    //         // markers: true,
    //         toggleActions: "play reverse play reverse",
    //       },
    //     }
    //   );
    // }
  });
});





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
    el: ".swiper-pagination",
    
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
    el: ".swiper-pagination",
    
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
    el: ".swiper-pagination",
    
  },
});

/**
|--------------------------------------------------
| product line-up
|--------------------------------------------------
*/

if (window.innerWidth <= 767) {
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
})
}

if (window.innerWidth >= 768) {
function fadeInAndMoveUp(element, delay = 0) {
  let opacity = 0;
  let y = 6;
  const step = () => {
    opacity += 0.05;
    y -= 0.3;
    element.style.opacity = opacity;
    element.style.transform = `translateY(${y}px)`;

    if (opacity < 1 || y > 0) {
      requestAnimationFrame(step);
    }
  };
  setTimeout(() => requestAnimationFrame(step), delay);
}

function staggeredFadeIn(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    fadeInAndMoveUp(element, index * 150); // 150ms stagger delay
  });
}

function setupScrollTrigger(selector, callback) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // 50%の要素が見えたら発火
  });

  document.querySelectorAll(selector).forEach((element) => {
    observer.observe(element);
  });
}

setupScrollTrigger('.js-product__unisex', () => staggeredFadeIn('.js-product__unisex li'));
setupScrollTrigger('.js-product__kids', () => staggeredFadeIn('.js-product__kids li'));
}
// document.querySelectorAll('.js-fade').forEach((fade) => {
//   setupScrollTrigger(fade, () => fadeInAndMoveUp(fade, 0));
// });



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
| about タイムラインでfade-in
|--------------------------------------------------
*/

const aboutFade = document.querySelectorAll(".js-about-fade")
const aboutTrigger = document.querySelector(".js-about");

gsap.utils.toArray(aboutFade).forEach((elem, index) => {
  gsap.from(elem, {
    opacity: 0, // 開始時の透明度は0
    y: 30, // 開始時は下から50pxの位置にある
    duration: .8, // アニメーションの持続時間は1秒
    delay: index * 0.2, // 要素ごとに0.2秒ずつ遅延させる
    scrollTrigger: {
      trigger: aboutTrigger, // トリガーとなる要素のセレクタ
      start: "top bottom-=50%", // トリガー要素の上部がビューポートの下部から50%の位置に達したら開始
      end: "bottom top", // トリガー要素の下部がビューポートの上部に達したら終了
      toggleActions: "play none none none", // スクロールトリガーがアクティブになったときにアニメーションを開始
    }
  });
});


/**
|--------------------------------------------------
| 背景色の切り替え
|--------------------------------------------------
*/

// const sectionColors = document.querySelectorAll(".js-color-change");
// sectionColors.forEach((sectionColor) => {
//   const sectionColorId = sectionColor.id;
//   // アニメーション
//   gsap.to("body", {
//     delay: 0.1,
//     duration: 0.1,
//     ease: "Power1.easeInOut", // イージング関数を追加
//     scrollTrigger: {
//       trigger: sectionColor,
//       start: "top bottom",
//       toggleActions: "play reverse play reverse",
//       markers: true,
//       toggleClass: {
//         targets: [
//           "body",
//           // 追加のクラスやセレクタをここに追加
//         ],
//         className: sectionColorId,
//       },
//     },
//   });
// });

document.addEventListener('scroll', function() {
  const pInfoElement = document.getElementById('js-color-information'); // p-information要素を取得
  const aboutElement = document.getElementById('js-color-about'); // p-information要素を取得
  const colorProductElement = document.getElementById('js-color-product'); 
  const pInfoElementBottom = pInfoElement.getBoundingClientRect().top; // 要素の下部のビューポートからの位置
  const aboutElementBottom = aboutElement.getBoundingClientRect().top; // 要素の下部のビューポートからの位置
  const colorProductElementTop = colorProductElement.getBoundingClientRect().top; 
  const viewportHeight = window.innerHeight; // ビューポートの高さ

  if (pInfoElementBottom <= viewportHeight && colorProductElementTop > viewportHeight) {
    // pInfoElementBottomがビューポートの下部に入り、かつ、colorProductElementTopがまだビューポートの下部に達していない場合
    document.body.style.backgroundColor = '#F8F8F5'; // 背景色を#F8F8F5に変更
  } else if (aboutElementBottom <= viewportHeight && colorProductElementTop > viewportHeight) {
    // aboutElementBottomがビューポートの下部に入り、かつ、colorProductElementTopがまだビューポートの下部に達していない場合
    document.body.style.backgroundColor = '#FCFCFA'; // 背景色を#FCFCFAに変更
  } else if (colorProductElementTop <= viewportHeight) {
    // colorProductElementTopがビューポートの下部に入った場合
    document.body.style.backgroundColor = '#fff'; // 背景色を元に戻す
  }
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
    if (scroll > offset - windowHeight + 100) {
      $(this).addClass("c-fade__in");
    }
  });
});

var photosBlocks = document.querySelector(".js-photos__block");
photosBlocks.addEventListener("scroll", function () {
  var scrollableHeight = photosBlocks.scrollHeight - photosBlocks.clientHeight;
  var currentScroll = photosBlocks.scrollTop;
  if (currentScroll > scrollableHeight + 10) {
    photosBlocks.classList.add("is-scroll-fixed");
  } else {
    photosBlocks.classList.remove("is-scroll-fixed");
  }
});
var photosBlocksBack = document.querySelector(".js-information");
// スクロール時の処理
window.addEventListener("scroll", function () {
  // 要素の位置情報を取得
  var rect = photosBlocksBack.getBoundingClientRect();
  // 画面の高さ
  var windowHeight = window.innerHeight;
  // 要素のtopが画面の真下にきたかどうかを判定
  var isPhotosBlocksBackAtBottom = rect.top + 1 <= windowHeight;
  if (isPhotosBlocksBackAtBottom) {
    // p-look__goodsが画面の真下にきたときの処理
    console.log("p-look__goodsが画面に表示されました。");
    photosBlocks.classList.add("is-scroll-fixed");
  } else {
    console.log("p-look__goodsが画面から消えました。");
    photosBlocks.classList.remove("is-scroll-fixed");
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




// if (gsap && ScrollTrigger) {
//   let photoScrollTriggers = [];
//   let currentIndex = 0; // 現在のphotoItemのインデックス
//   const photoItems = gsap.utils.toArray('.js-photos__items'); // photoItemsの初期化
//   let canScroll = true; // スクロール制御のフラグ

//   const applySnapping = () => {
//     const snapHeight = window.innerHeight;

//     photoScrollTriggers.forEach(st => st.kill());
//     photoScrollTriggers = [];

//     if (window.innerWidth >= 768) {
//       photoItems.forEach((item, index) => {
//         const trigger = gsap.to(item, {
//           scrollTrigger: {
//             trigger: item,
//             start: "top top",
//             end: () => `+=${snapHeight}`, // スクロール終了位置をウィンドウの高さの倍数ではなく、固定の高さに変更
//             pin: true,
//             scrub: true,
//             snap: {
//               snapTo: "labels",
//               duration: {min: 0.2, max: 0.3},
//               delay: 0,
//               ease: "power1.inOut"
//             },
//           }
//         });

//         // スクロール速度を調整
//         trigger.scrollTrigger.scroll(onScroll);
//         photoScrollTriggers.push(trigger.scrollTrigger);
//       });
//     }
//   };

//   const onScroll = () => {
//     if (!canScroll) return;
//     canScroll = false;
//     setTimeout(() => canScroll = true, 0.8); // 調整可能な値。スクロールの速度に合わせて調整してください。
//   };

//   applySnapping();
//   // window.addEventListener('resize', gsap.utils.debounce(applySnapping, 250));
// }



