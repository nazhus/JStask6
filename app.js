document.addEventListener("DOMContentLoaded", function() {
    const soundBoxes = document.querySelectorAll(".sound-box");
    let currentAudio = null;
  
    soundBoxes.forEach(function(box) {
      const audio = new Audio(box.dataset.sound);
      box.addEventListener("click", function() {
        if (currentAudio && !currentAudio.paused) {
          currentAudio.pause();
        }
        if (currentAudio !== audio) {
          audio.play();
          currentAudio = audio;
        } else {
          currentAudio = null;
        }
      });
    });
  });
  
 
  