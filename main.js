$(document).ready(function (e) {
 console.log(e); 
  $(".about").click(function(e) {
    // $("#tabs-1").css("display" , "block");
    $("#tabs-1").slideToggle('fast');
    $("#tabs-2, #tabs-3, #tabs-4").hide();
  });
  $(".crew").click(function(e) {
    e.preventDefault;
    $("#tabs-2").slideToggle("fast");
    $("#tabs-1, #tabs-3, #tabs-4").hide();
  }); 
  $(".faq").click(function(e) {
    e.preventDefault;
    $("#tabs-3").slideToggle("fast");
    $("#tabs-1, #tabs-2, #tabs-4").hide();
  });
  $(".terms").click(function(e) {
    e.preventDefault;
    $("#tabs-4").slideToggle("fast");
    $("#tabs-1, #tabs-2, #tabs-3").hide();
  });
}); 
