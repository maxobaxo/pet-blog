$(document).ready(function() {
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-mode");
  });
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day-mode");
  });
  });
