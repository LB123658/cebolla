$(window).resize(function() {
  if ($(window).width() < 600) {
  window.location.search = "?device=mobile";
  }
 else {
    ;
 }
});
