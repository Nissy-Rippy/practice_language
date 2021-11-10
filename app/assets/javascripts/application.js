// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require moment
//= require fullcalendar


let  hello = "hello world"

alert(hello);

alert(4+3);
alert("hello" + "world");

let str1 = "hello"
let str2 = "world"

alert(str1 + str2);

let orange = 1000;
let apple = 500;

if(orange < apple){
  alert("オレンジはりんごより安い");
}else if(orange == apple){
  alert("オレンジとりんごは同じ値段");
}else{
  alert("オレンジはりんごより高い");
}

let num = 1;
let max = 100;
let count = 1;

while(num < max){
  num = num * 2;
  count = count =+ 1
}

alert("2をかけ続けて" + max + "を超えるまでに" + count + "回でした");

let promptStr = prompt("何か入力をしてください");
alert(promptStr);


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

ert("2をかけ続けて" + max + "を超えるまでに" + count + "回でした");

let promptStr = prompt("何か入力をしてください");
alert(promptStr);


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');


function getJshand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  let hand_name;
  
  
  
}
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}



$(document).ready(function(){
  $("body").html("<h1>Hello Jquery</h1>");
});
// プロパティ―と値をシングルオートで囲む´
$(function(){
 $(".box").css({
   'background-color': 'blue',
   'heigh': '100px'
 });
});

$(function(){
  $(".box").slideDown();
});

$(function(){
  $(".box").slideUp();
});

$(function(){
  $(".box").hide();
});


$(function(){
   $(".box").slideDown(function(){
     $(".box").css({
       'background-color': 'blue',
       'height': '100px'
     }).slideDown();
   });
});


$(function(){
  $(".box").mouseover(function(){
    $(".box").css({'background': 'red'});
  });
  $(".box").mouseout(function(){
    $(".box").css({'background': 'blue'});
  });
  });
  
$(function(){
  $('.box').mouseover(function(){
    $('.box').addClass('.box5');
  });
  $('.box').mouseout(function(){
    $('.box').removeClass('.box5');
  });
});


$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('.box4');
  });
  $('.box1').mouseover(function(){
    $('box1').removeClass('.box4');
  });
});

// thisを使うとコンパクトにできる
$(function(){
  
  $('.bg1').on('click', function(){
    $('.bg1').slideUp();
  });

  $('.bg2').on('click', function(){
    $('.bg2').slideUp();
  });

  $('.bg3').on('click', function(){
    $('.bg3').slideUp();
  });

  $('.bg4').on('click', function(){
    $('.bg4').slideUp();
  });
});

$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

$(function(){
  $('ul').children().css({'color': 'red'});
});

$(function(){
  $('#back a').on('click', function(event){
   $('body,html').animate({
     scrollTop: 0,
   },800);
   event.preventDefault();
  });
});


$(function(){
  $(".box1").on('click', function(e){
    $(this).toggleClass('active');
    $('#box3').fadeToggle();
    e.preventDefault();
  });
});


// これは、初期表示のためのコード
$('#tab-content .tab[tab != "tab1"]').hide();

$('#tab-manu a').on('click', function(e){
  $('#tab-content .tab').hide();
  $('#tab-manu .active').removeClass('active');
  $(this).addClass('active');
  $($(this).attr('href')).show();
});

$(document).on('turbrinks:reload', function(){
  $('box1').on('click', function(e){
    $(this).toggleClass('active');
    $('.box2').fadeToggle();
  $('.box3').mouseover(function(){
    $('box3').css({
      'colore': 'red',
      'backgoroun-color': 'blue'
    });
    $('box3').mouseout(function(){
      $('.box3').removeClass('active');
    });
  });
    e.preventDefault();
  });
});
$(document).ready(function(){
  $('search-input').on('click', function(){
    let input = $('search-input').val();
    $.ajax({
      type: 'GET',
      url: '/videos/search',
      data: {keyword: input},
      dataType: 'json'
    })
    
    .done(function(){
      
    });
  });
});


// 復習二度目
let hello = "hello world"

alert(hello);

alert(4+3);
alert("hello" + "world");

let str1 = "hello"
let str2 = "world"

alert(str1 + str2);

let orange = 1000;
let apple = 500;

if(orange < apple){
  alert("オレンジはりんごより安い");
}else if(orange == apple){
  alert("オレンジとりんごは同じ値段");
}else{
  alert("オレンジはりんごより高い");
}

let num = 1;
let max = 100;
let count = 1;

while(num < max){
  num = num * 2;
  count = count =+ 1
}

alert("2をかけ続けて" + max + "を超えるまでに" + count + "回でした");

let promptStr = prompt("何か入力をしてください");
alert(promptStr);


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}
