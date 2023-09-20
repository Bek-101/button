var buttons = document.querySelectorAll('button');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {

    button.style.display = 'none';


    var nextIndex = (index + 1) % buttons.length;
    buttons[nextIndex].style.display = 'block';
  });
});
