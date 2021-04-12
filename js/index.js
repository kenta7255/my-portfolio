$(function () {
  "use strict";

  $('.sidebar').stickySidebar({
    topSpacing: 0,
    bottomSpacing: 0,
    containerSelector: '.wrapper',
    innerWrapperSelector: '.sidebar-inner',

  });


  var maxNum = 2, // 最大枚数
    rdm = Math.floor(Math.random() * (maxNum)) + 1;
  $('#randomShow').attr('src', 'img/mv' + rdm + '.jpeg');


  $('.toggle').on('click', function () {
    // タブ処理
    $(this).next().slideToggle(300);
    return false;
  });


  var speed = 1200;
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(".top").click(function () {
    var position = 0;
    $("html,body").animate({ scrollTop: position }, speed, "swing");

  });

  $(function () {
    var h = $(window).height();

    $('.container').css('display', 'none');
    $('#loader-bg ,#loader').height(h).css('display', 'block');
  });

  $(window).load(function () { //全ての読み込みが完了したら実行
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.container').css('display', 'block');
  });

  //10秒たったら強制的にロード画面を非表示
  $(function () {
    setTimeout('stopload()', 10000);
  });

  function stopload() {
    $('.container').css('display', 'block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }


  var randomContent = [];
  $('.works-grid .work').each(function () {
    randomContent.push($(this).html());
  });

  randomContent.sort(function () {
    return Math.random() - Math.random();
  });
  $('.works-grid .work').empty();
  var i = 0;
  $('.works-grid .work').each(function () {
    $(this).append(randomContent[i]);
    i++;
  });


  $('.form').submit((event) => {
    var formData = $('.form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkSIZYS1vcsR0GMC2FwEVOskw27-IkHV_gbEMR3hjsW-8WOg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

  var $submitBtn1 = $('.modal-js-submit');
  $('.modal-form input,.modal-form textarea').on('change', function () {
    if (
      $('.modal-form input[type="text"]').val() !== "" &&
      $('.modal-form input[type="email"]').val() !== "" &&
      $('.modal-form textarea').val() !== ""
    ) {
      $submitBtn1.prop('disabled', false);
    } else {
      $submitBtn1.prop('disabled', true);
    }
  });

  var $submitBtn2 = $('.sidebar-js-submit');
  $('.sidebar-form input,.sidebar-form textarea').on('change', function () {
    if (
      $('.sidebar-form input[type="text"]').val() !== "" &&
      $('.sidebar-form input[type="email"]').val() !== "" &&
      $('.sidebar-form textarea').val() !== ""
    ) {
      $submitBtn2.prop('disabled', false);
    } else {
      $submitBtn2.prop('disabled', true);
    }
  });

  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });

});