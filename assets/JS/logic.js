// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzT9Ll9BfZ3ZSOUCm1WKvXVMF9CPKtCjc",
  authDomain: "portfolio-a089f.firebaseapp.com",
  databaseURL: "https://portfolio-a089f.firebaseio.com",
  projectId: "portfolio-a089f",
  storageBucket: "",
  messagingSenderId: "617932475716",
  appId: "1:617932475716:web:85b094abcd8664d069db11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();

$("#submit").on("click", function (event) {
  event.preventDefault();

  var first = $("#first").val().trim();
  var last = $("#last").val().trim();
  var email = $("#email").val().trim();
  var comment = $("#comment").val().trim();
  var time = moment().format('LLL'); 

  var newInput = {
    newFirst: first,
    newLast: last,
    newEmail: email,
    newComment: comment,
    inputTime: time,
  };

  if (first === "") {
    alert("Please enter your name!")
  } else if (last === "") {
    alert("Please enter your last name!")
  } else if (email === "") {
    alert("Please enter your email!")
  } else if (comment === "") {
    alert("Please enter a Comment or Question!")
  } else {
    alert("Thank you for your input!");

  }

  database.ref().push(newInput);



  $("#first").val("");
  $("#last").val("");
  $("#email").val("");
  $("#comment ").val("");

})

