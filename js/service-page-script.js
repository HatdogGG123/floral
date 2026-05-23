$(document).ready(() => {
  $("#hero header .logo-title").removeClass("translate-y-10").css({
    "opacity": "100"
  })
  
  $("#hero header > button").removeClass("translate-y-10").css({
    "opacity": "100"
  });
  
  let spanList = $("#hero .landing-text span");
  for (let index = 0; index < spanList.length; index++) {
    $(spanList[index]).removeClass("translate-y-10 opacity-0");
  }
  
  let elList = $(".slide-up");
  for (let index = 0; index < elList.length; index++) {
    $(elList[index]).removeClass("translate-y-10 opacity-0");
  }
  
  
  $("#toggleNavBtn").on("click", function() {
    $("body").toggleClass("overflow-hidden");
    
    $("#arm3").toggleClass("hidden");
    $("#arm1").toggleClass("rotate-45");
    $("#arm2").toggleClass("-translate-y-1.5 -rotate-45");
    $("#smallScreenNav").fadeToggle(300);
    
  })
  
  let navList = $("#smallScreenNav a");
  for (let index = 0; index < navList.length; index++) {
    navList.eq(index).on("click", function() {
      $("#smallScreenNav").fadeToggle(300);
      $("body").toggleClass("overflow-hidden");
      $("#arm3").toggleClass("hidden");
      $("#arm1").toggleClass("rotate-45");
      $("#arm2").toggleClass("-translate-y-1.5 -rotate-45");
      
    })
  }
})

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('bg-secondary');
  } else {
    $('header').removeClass('bg-secondary');
  }
});