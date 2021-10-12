window.onload = function(){
    setTimeout(function(){
      document.getElementById("loader").remove();
    },1000);
  };




VANTA.NET({
  el: "section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0
})
