(() => {
  // make a reference to all of the buttons
  const playButtons = document.querySelectorAll('.playButtons'),
        pauseButtons = document.querySelectorAll('.pauseButton')
        rwButtons = document.querySelectorAll('.rwButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

  // play the son associated with the button (itsdata-trackref attribute)
  function playTrack() {
    // try to fix pause play //
    // a return statement kills your code execution here - don't go past this point
    if (globalPaused) {
      console.log('paused');
      // if our audio is paused, then just play te track and exit
      playTrack();
      return;
    }

    //debugger;
    let audioSource = this.dataset.trackref;

    // set the audio source
    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play it
    audioElement.load();
    audioElement.play();
    //playTrack();
  }

  function pauseTrack() {
    audioElement.play();
    globalPaused = false;
  }

  function rwTrack() {
    audioElement.currentTime = 0;
  }


  // process the playButtons and add some event handling
  playButtons.forEach(button => button.addEventListener("click", playTrack));
  pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
  rwButtons.forEach(button => button.addEventListener("click", rwTrack));
})();
