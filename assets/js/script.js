$(document).ready(function() {

  $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >=600) {
          // $("#topbar").addClass("color");
          $("#topbar").css("background-color","#d3d3d3");
        } else {
          $("#topbar").removeAttr("background-color");
        }
      })
  });
