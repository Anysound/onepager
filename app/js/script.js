$( ".tab-link" ).click(function(event) {
  // это делается чтобы отключить стандарный обработчик ссылки.
  // это не всегнда обязательно, но если хочешь точно задать поведение для ссылки, 
  // чтобы она не пыталась при клике куда то тебя перевести, используешь preventDefault
  event.preventDefault(); 
  
  
  //чтобы отметить текущую ссылку 
  // снимаем со всех ссылок класс актив
  $( ".tab-link" ).removeClass('tab-link-active');
  // помечаем текущую ссылку

  $( this ).addClass('tab-link-active'); 
  
  //почитай про data-атрибуты, это по сути кастомные атрибты. можно придумывать свои и получать их знгачение через .data()
  
  // получаем id блока, который надо отобразить
  var blockId = $( this ).data('id'); // получаем значение из data-id='tab1'
     $(".tab-link").animate({left: "+=200", top: "-=200"}, 500); 
  // снимаем активность со всех блоков (прячем)
  $( ".tab-block" ).removeClass('tab-block-active');
  
  
  // отображаем нужный блок

  $( '#'+blockId ).addClass('tab-block-active'); 
  $('.tab-block-active').fadeIn(3000); 
  //$('.tab-block-active').fadeIn(4000);
  //$( '#'+blockId ).addClass('tab-block-active'); 
});



$('.tab-link').css('transition', '.5s');


