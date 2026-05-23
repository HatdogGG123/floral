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
  $("#showPortfolioBtn").removeClass("scale-0");
  
  
  $("#toggleNavBtn").on("click", function() {
    $("body").toggleClass("overflow-hidden");
    
    $("#arm3").toggleClass("hidden");
    $("#arm1").toggleClass("rotate-45");
    $("#arm2").toggleClass("-translate-y-1.5 -rotate-45");
    $("#smallScreenNav").fadeToggle(300);
    
    $('header .logo-title').toggleClass('text-white');
    $("#arm1").toggleClass("bg-white");
    $("#arm2").toggleClass("bg-white");
    $("#arm3").toggleClass("bg-white");
  })
  
  let navList = $("#smallScreenNav a");
  for (let index = 0; index < navList.length; index++) {
    navList.eq(index).on("click", function() {
      $("#smallScreenNav").fadeToggle(300);
      $("body").toggleClass("overflow-hidden");
      $("#arm3").toggleClass("hidden");
      $("#arm1").toggleClass("rotate-45");
      $("#arm2").toggleClass("-translate-y-1.5 -rotate-45");
      
      $('header .logo-title').toggleClass('text-white');
      $("#arm1").toggleClass("bg-white");
      $("#arm2").toggleClass("bg-white");
      $("#arm3").toggleClass("bg-white");
    })
  }
  
  $(".socmed-link-list").removeClass("opacity-0");
  let socmedLinkLlist = $(".socmed-link-list > a");
  for (let index = 0; index < socmedLinkLlist.length; index++) {
    console.log(index)
    socmedLinkLlist.eq(index).removeClass("translate-y-10 opacity-0");
  };
  

})

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 50) {
    $('header').addClass('bg-secondary');
    $('header .logo-title').addClass('text-white');
    
    $("#arm1").addClass("bg-white");
    $("#arm2").addClass("bg-white");
    $("#arm3").addClass("bg-white");
    
   $("#largeScreenNav a").addClass("text-white");
  } else {
    $('header').removeClass('bg-secondary');
    $('header .logo-title').removeClass('text-white');
  
    $("#arm1").removeClass("bg-white");
    $("#arm2").removeClass("bg-white");
    $("#arm3").removeClass("bg-white");
    
    $("#largeScreenNav a").removeClass("text-white");
  }
});
