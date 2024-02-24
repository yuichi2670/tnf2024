
/**
|--------------------------------------------------
| 商品詳細項目の切り替え
|--------------------------------------------------
*/
// 各画像グループが画面最上部に来たら一致するIDのものを表示して、各画像グループの最下部が画面上部から消えたら消す


const photosDetail = document.getElementById('js-photos__detail');
const photoItems = document.querySelectorAll('.js-photos__items');
const photoContainer = document.querySelector('.js-photos__container');
const photoInfo = document.querySelector('.js-photos__info')

gsap.to(photoInfo, {
  autoAlpha: 0,
  duration: .3,
  scrollTrigger: {
    trigger: photoContainer,
    start: 'bottom-=190px top',
    markers: true,
    toggleActions: "play reverse play reverse",
  }
});

photoItems.forEach(item => {
  const targetId = item.getAttribute('href');
  const photosDetail = document.querySelector(targetId);
  
  gsap.fromTo(photosDetail, {
    autoAlpha: 0,
    visibility: 'hidden'
  },
  {
    autoAlpha: 1,
    visibility: 'visible',
    duration: .3,
    scrollTrigger: {
      trigger: item,
      start: 'top top',
      end: 'bottom top',
      toggleActions: "play reverse play reverse",
    }
  });

  
});




/**
|--------------------------------------------------
| 各modalのスライド 
|--------------------------------------------------
*/
const swiper = new Swiper(".swiper2023", {
  loop: true,
    speed: 2000,            //追加（スライドスピード）
    effect: 'fade',
    allowTouchMove: false,         //追加（フェードエフェクトを適用する）
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
    speed: 2000,            //追加（スライドスピード）
    effect: 'fade',
    allowTouchMove: false,         //追加（フェードエフェクトを適用する）
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
    speed: 2000,            //追加（スライドスピード）
    effect: 'fade',
    allowTouchMove: false,         //追加（フェードエフェクトを適用する）
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


