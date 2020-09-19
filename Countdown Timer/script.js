// var date=prompt("Enter The date You want to set timer");
// Set the date we're counting down to
//   var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
  var date = document.getElementById("date").value;

  // Get today's date and time
  var now = new Date().getDate();

  // Find the distance between now and the count down date
  var distance = date - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = distance;
  //  + hours + "h--" + minutes + "m--" + seconds + "s ";

  // If the count down is finished, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
}, 1000);
