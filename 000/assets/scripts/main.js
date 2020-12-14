$(document).ready(function () {
  const topbar_nav_menus = $(".top-bar__nav a+div");
  console.log("topbar_nav_menus", topbar_nav_menus.length);
  $(topbar_nav_menus.siblings("a")[0]).click(function (e) {
    e.preventDefault();
    $($(this).siblings("div")).toggleClass("visible");
  });
});
