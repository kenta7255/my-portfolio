$(function () {
  "use strict";
  var maxNum = 2, // 最大枚数
    rdm = Math.floor(Math.random() * (maxNum)) + 1;
  $('#randomShow').attr('src', 'img/mv' + rdm + '.jpeg');

  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });

  function demo01() {
    $(this).next().slideToggle(300);
  }

  $(".toggle").click(demo01);


  var speed = 1200;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(".top").click(function () {
    var position = 0;
    $("html,body").animate({ scrollTop: position }, speed, "swing");

  });

});