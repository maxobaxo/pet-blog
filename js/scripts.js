$(document).ready(function() {
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-mode");
    $("div#night-mode-text").removeClass();
    $("div#night-mode-text").addClass("night-mode-text");
  });
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day-mode");
    $("div#night-mode-text").removeClass();
    $("div#night-mode-text").addClass("day-mode-text");
  });
  });
