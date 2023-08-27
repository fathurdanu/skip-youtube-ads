if (window == top) {
  window.addEventListener("keyup", doKeyPress, false); //add the keyboard handler
}

function doKeyPress(e) {
  if (e.shiftKey && e.keyCode === 81) {
    const skip_button = document.getElementsByClassName(
      "ytp-ad-skip-button ytp-button"
    )[0];
    if (skip_button) {
      skip_button.click();
    }
  }
}
