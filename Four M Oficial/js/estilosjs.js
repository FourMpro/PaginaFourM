window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navepica").style.padding = "2px 5px";
    document.getElementById("logoBanner").style.width = "250px";
  } else {
    document.getElementById("navepica").style.padding = "80px 15px";
    document.getElementById("logoBanner").style.width = "550px";
  }
}