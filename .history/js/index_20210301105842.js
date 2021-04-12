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

  function demo01() {
    $(this).next().slideToggle(300);
  }

  $(".toggle").click(demo01);


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


  $(function () {

    var rBox = [];
    $('.elements').each(function () {
      rBox.push($(this).html());
    });
    rBox.sort(function () {
      return Math.random() - Math.random();
    });
    $('.elements').empty();

    i = 0;
    $('.elements').each(function () {
      $(this).append(rBox[i]);
      i++;
    });

  });


});