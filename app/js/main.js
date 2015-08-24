$(document).ready(function() {

// Кнопка Наверх
  var btnTop = $(".go-top");

      if ($(window).scrollTop() > 500) {
              btnTop.stop(true, true).fadeIn();
              } else {
              btnTop.stop(true, true).fadeOut();
              }
            $(window).scroll(function() {
              if ($(window).scrollTop() > 500) {
                      btnTop.stop(true, true).fadeIn();
              } else {
                      btnTop.stop(true, true).fadeOut();
              }
      });


              btnTop.click(function() {
                      $("body,html").stop(true, true).animate({
                              scrollTop: 0
                      }, 500);
              });


// Плагин select2

  $('.view__select').select2();




// Accordeon

  $('.accordeon__trigger').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        list = $this.closest('.accordeon__list'),
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon__inner-list'),
        otherContent = list.find('.accordeon__inner-list'),
        duration = 300;


      if (!item.hasClass('active')) {
          items.removeClass('active');
          item.addClass('active');

        otherContent.stop(true, true).slideUp(duration);
        content.stop(true, true).slideDown(duration);
      } else {
        content.stop(true, true).slideUp(duration);
        item.stop(true, true).removeClass('active');
      }


  });





});