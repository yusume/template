// 상단 메뉴 고정 
$(document).ready(function () {
    if ($(window).width() > 768) {
    $(".navbar").css({ "padding": "2rem 2rem", "transition": "padding .2s" });
    }
});

console.log();
if ($(window).width() > 768) {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $(".navbar").css({ "padding": "0.6rem 0.6rem", "transition": "padding .2s" });
        } else {
            $(".navbar").css({ "padding": "2rem 2rem", "transition": "padding .2s" });
        }
    }
}


(function (global, $) {
    var $doc = $('html, body');

    var btnTop = $('.btn-top');
    btnTop.on('click', function (e) {
        e.preventDefault();
        $doc.stop().animate({
                scrollTop: 0
            }, 800)
    });
    var btndown = $('.btn-down');
    btndown.on('click', 'a', function (e) {
        e.preventDefault();
        $doc.stop().animate({
            scrollTop: 600
        }, 800)
    });

    //파일 업로드

    var fileTarget = $('.table .upload-hidden');
  
      fileTarget.on('change', function(){
          if(window.FileReader){
              var filename = $(this)[0].files[0].name;
          } else {
              var filename = $(this).val().split('/').pop().split('\\').pop();
          }
          $(this).siblings('.upload-name').val(filename);
      });
}(window, window.jQuery));
