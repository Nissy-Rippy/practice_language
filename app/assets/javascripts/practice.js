// プロゲートでの学習コードをここで書いていきます。

//   <img src="https://prog-8.com/images/html/beginner/wanko.jpg">


$(function() {
  $('img').fadeOut();
  $('p').slideUp();
});


$(function() {
  $('#title').show();
  $('#image').fadeIn();
});

$(function() {
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });
});

$(function() {
  // 「#change-css」要素に対するclickイベントを作成してください
 $('#change-css').click(function(){
   $('#text').css({
     'color': 'red',
     'font-size': '50px'});
 });
    
});

$(function() {
  $('#change-text').click(function(){
    $('#text').text('ようこそ、Progateへ');
  });
  $('#change-html').click(function(){
    $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
   });
});

$(function(){
  $('#change-text').click(function(){
    $('#text').html('<a hre="https//prog-8.com/"></a>');
  });
});

$(function() {
  $('.list-item').click(function(){
    $(this).css('color','red');
  });
});

$(function() {
  $('#find-method').click(function() {
    var $wrapper = $('wrapper');
    
    $('#wrapper').find('a').css('color','red');
    
  });
  
  $('#children-method').click(function() {
    $('#wrapper').children('a').fadeOut();
  });
});
$(function() {
  $('#find-method').click(function() {
    var $wrapper = $('wrapper');
    
    $('#wrapper').find('a').css('color','red');
    
  });
  
  $('#children-method').click(function() {
    $('#wrapper').children('a').fadeOut();
  });
});

// hoverは、（）の引数にfunctionを二つ入れているので()と{}に注意しよう

$(function() {
  $('#language-wrapper').hover(
  function(){
    $('.language-text').fadeIn();
  },
  function(){
    $('.language-text').fadeOut();
  }
  );
});

$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
});

$(function() {
  $('#hide-btn').click(function(){
    $('.slide').eq(1).fadeOut();
  });
  
});


(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    
    var clickedIndex = $('.index-btn').index($(this));
    
    $('.slide').eq(clickedIndex).addClass('active');
    
  });
});



$(function() {
  $('img').fadeOut();
  $('p').slideUp();
});


$(function() {
  $('#title').show();
  $('#image').fadeIn();
});

$(function() {
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });
});

$(function() {
  // 「#change-css」要素に対するclickイベントを作成してください
 $('#change-css').click(function(){
   $('#text').css({
     'color': 'red',
     'font-size': '50px'});
 });
    
});

$(function() {
  $('#change-text').click(function(){
    $('#text').text('ようこそ、Progateへ');
  });
  $('#change-html').click(function(){
    $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
   });
});


$(function() {
  $('.list-item').click(function(){
    $(this).css('color','red');
  });
});


$(function() {
  $('#find-method').click(function() {
    var $wrapper = $('wrapper');
    
    $('#wrapper').find('a').css('color','red');
    
  });
  
  $('#children-method').click(function() {
    $('#wrapper').children('a').fadeOut();
  });
});

// hoverは、（）の引数にfunctionを二つ入れているので()と{}に注意しよう

$(function() {
  $('#language-wrapper').hover(
  function(){
    $('.language-text').fadeIn();
  },
  function(){
    $('.language-text').fadeOut();
  }
  );
});

$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
  $('#login-show').click(function(){
    $('#login-modal').mouseout(function(){
      $('login-modal').fadeOut();
    });
  });
  
});

$(function() {
  $('#hide-btn').click(function(){
    $('.slide').eq(1).fadeOut();
  });
  
});



(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    
    var clickedIndex = $('.index-btn').index($(this));
    
    $('.slide').eq(clickedIndex).addClass('active');
    
  });
});
var clickedIndex = $


$('input[type="text"]').val('');

$('#inputScheduleForm').modal('hide');
$('#inputEditForm').html('<%= escape_javascript(render("url") %>');
$('#calendar').fullCalendar('refetchEvents')

$('#inputEditForm').html('<%= escape_javascript(render("practice/practices", events: @events)) %>');
$('.modal-backdrop').remove();
$('#calendar').fullCalendar('refetchEvents')