  // Activate Carousel
  $("#myCarousel").carousel({
    interval: 5 * 1000
  });
  
  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function () {
    $("#myCarousel").carousel(3);
  });
  
  // Enable Carousel Controls
  $(".left").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function () {
    $("#myCarousel").carousel("next");
  });
  
  

(function($) {

  // Remove no-js class
  $('html').removeClass('no-js');

  // Animate to section when nav is clicked
  $('header a').click(function(e) {

      // Treat as normal link if no-scroll class
      if ($(this).hasClass('no-scroll')) return;

      e.preventDefault();
      var heading = $(this).attr('href');
      var scrollDistance = $(heading).offset().top;

      $('html, body').animate({
          scrollTop: scrollDistance + 'px'
      }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

      // Hide the menu once clicked if mobile
      if ($('header').hasClass('active')) {
          $('header, body').removeClass('active');
      }
  });

  // Scroll to top
  $('#to-top').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  });

  // Scroll to first element
  $('#lead-down span').click(function() {
      var scrollDistance = $('#lead').next().offset().top;
      $('html, body').animate({
          scrollTop: scrollDistance + 'px'
      }, 500);
  });

  // Create timeline
  $('#experience-timeline').each(function() {

      $this = $(this); // Store reference to this
      $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function() {
          $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function() {
          $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function() {
          var date = $(this).data('date');
          if (date) { // Prepend if exists
              $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
          }
      });

  });

  // Open mobile menu
  $('#mobile-menu-open').click(function() {
      $('header, body').addClass('active');
  });

  // Close mobile menu
  $('#mobile-menu-close').click(function() {
      $('header, body').removeClass('active');
  });

  // Load additional projects
  $('#view-more-projects').click(function(e){
      e.preventDefault();
      $(this).fadeOut(300, function() {
          $('#more-projects').fadeIn(300);
      });
  });




})(jQuery);



// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBzT9Ll9BfZ3ZSOUCm1WKvXVMF9CPKtCjc",
//   authDomain: "portfolio-a089f.firebaseapp.com",
//   databaseURL: "https://portfolio-a089f.firebaseio.com",
//   projectId: "portfolio-a089f",
//   storageBucket: "",
//   messagingSenderId: "617932475716",
//   appId: "1:617932475716:web:85b094abcd8664d069db11"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// var database = firebase.database();

// $("#submit").on("click", function (event) {
//   event.preventDefault();

//   var first = $("#first").val().trim();
//   var last = $("#last").val().trim();
//   var email = $("#email").val().trim();
//   var comment = $("#comment").val().trim();
//   var time = moment().format('LLL');

//   var newInput = {
//     newFirst: first,
//     newLast: last,
//     newEmail: email,
//     newComment: comment,
//     inputTime: time,
//   };

//   if (first === "") {
//     alert("Please enter your name!")
//   } else if (last === "") {
//     alert("Please enter your last name!")
//   } else if (email === "") {
//     alert("Please enter your email!")
//   } else if (comment === "") {
//     alert("Please enter a Comment or Question!")
//   } else {
//     // alert("Thank you for your input!");
//     $("#input").html("Thank You for your input!")
//   }

//   database.ref().push(newInput);



//   // $("#first").val("");
//   // $("#last").val("");
//   // $("#email").val("");
//   // $("#comment ").val("");


// })

