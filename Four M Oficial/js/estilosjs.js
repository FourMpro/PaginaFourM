window.onscroll = function() {functionNavcolapso()};

function functionNavcolapso() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarColapsante").style.padding = "2px 5px";
    document.getElementById("logoBanner").style.width = "250px";
  } else {
    document.getElementById("navbarColapsante").style.padding = "80px 15px";
    document.getElementById("logoBanner").style.width = "550px";
  }
}