$(document).ready(function () {
  $(".accor1").click(function () {
    $(".button-body1").slideToggle("slow");
    $(".button-body2").slideUp("slow");
    $(".button-body3").slideUp("slow");
    $(".accor1 i").toggleClass("active");
  });
  $(".accor2").click(function () {
    $(".button-body2").slideToggle("slow");
    $(".button-body1").slideUp("slow");
    $(".button-body3").slideUp("slow");
    $(".accor2 i").toggleClass("active");

  });
  $(".accor3").click(function () {
    $(".button-body3").slideToggle("slow");
    $(".button-body1").slideUp("slow");
    $(".button-body2").slideUp("slow");
    $(".accor3 i").toggleClass("active");

  });
});
