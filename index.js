
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('button[id^="button"]');
  
    for (var i = 0; i < buttons.length; i++) {
  
      buttons[i].addEventListener('click', function() {
        var target = this.getAttribute('id').replace('button', 'content');
        var content = document.getElementById(target);
  
        if (content.style.display === 'none') {
          content.style.display = 'block';
  
          for (var j = 0; j < buttons.length; j++) {
            if (buttons[j] !== this) {
              var otherTarget = buttons[j].getAttribute('id').replace('button', 'content');
              var otherContent = document.getElementById(otherTarget);
              otherContent.style.display = 'none';
  
            }
  
          }
        }
      });
    }
  });