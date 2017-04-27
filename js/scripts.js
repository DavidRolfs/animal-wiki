



$(document).ready(function(){

  var clicked;

  $("img").click(function() {
    clicked = $(this)[0].id;
    show(clicked)
  });

  var show = function(anything){
    if(anything === "tigerImg"){
      $("#tiger").toggle();
    } else if(anything === "snakeImg"){
      $("#snake").toggle();
    } else if(anything === "turtleImg"){
      $("#turtle").toggle();
    }
  };
})
