$(function () {
  /*reviwes
  ==============  https://kenwheeler.github.io/slick/*/

  let slider = $("#reviwesSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  // Timer

  (time = 30 * 60), (r = document.getElementById("timer")), (tmp = time);
  setInterval(function () {
    let c = tmp--,
      m = (c / 60) >> 0,
      s = c - m * 60 + "";
    r.textContent =
      "Через " +
      m +
      ":" +
      (s.length > 1 ? "" : "0") +
      s +
      " минут скидка сгорит. Торопитесь!";
    tmp != 0 || (tmp = time);
  }, 1000);
});

// прокрутка к форме заказа
$(document).on("click", ".btn__order", function (e) {
  e.preventDefault();
  var id = $(this).attr("href");
  var top = $(id).offset().top; // получаем координаты блока
  $("body, html").animate({ scrollTop: top }, 800); // плавно переходим к блоку
});

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();
