$(document).ready(function(){


  
   $('.menu_btn').click(function(){
        $('.menu_wrap').css({
            left:0,
        });
   });

   $('.close_btn').click(function(){
        $('.menu_wrap').css({
            left:-100 + "%",
        });
   });

});