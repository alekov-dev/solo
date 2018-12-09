// // How to use jquery.


// $(function () {
//   $('h1').hide(500).show(500);
//   $('h1').slideUp(1000).slideDown(1000);

//   $('#main').css({
//     color: "red",
//     fontSize: 25
//   });


//   $('h1').click(function () {
//     $('.content').css({
//       color: "blue",
//       fontSize: 50
//     });
//   });
// });

// $(window).on("load",function(){
//   alert("Window is loaded.")
// });


/* ======================================================
| | |             Preloader
========================================================== */
$(window).on('load', () => {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});
