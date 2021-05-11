$(window).resize(function() {
  if ($(window).width() < 500) {
  window.location.search = "?device=mobile";
  }
 else {
    ;
 }
});
