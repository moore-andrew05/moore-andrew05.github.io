document.getElementById('myButton').addEventListener('click', function() {
  var myAudio = document.getElementById('myAudio');
  var logocontainer = document.getElementById('logo_cont');
  var logo = document.getElementById('main_logo');
  var button = document.getElementById('myButton');
  var gal = document.getElementById('photo-gal')
  
  myAudio.play();

  logocontainer.style.visibility = 'hidden';
  logo.style.visibility = 'hidden';
  button.style.visibility = 'hidden';
  gal.style.visibility = "visible"

  // Play sound
});
 