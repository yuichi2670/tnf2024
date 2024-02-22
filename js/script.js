
/**
|--------------------------------------------------
|　modalのスライド 
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


