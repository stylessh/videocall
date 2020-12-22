/**
 * Starts the request of the camera and microphone
 *
 * @param {Object} callbacks
 */
function requestLocalVideo(callbacks) {
  // Monkeypatch for crossbrowser geusermedia
  navigator.getUserMedia =
    navigator.mediaDevices.getUserMedia ||
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  // Request audio an video
  navigator.getUserMedia(
    { audio: true, video: true },
    callbacks.success,
    callbacks.error
  );
}

/**
 * Handle the providen stream (video and audio) to the desired video element
 *
 * @param {*} stream
 * @param {*} element_id
 */
function onReceiveStream(stream, element_id) {
  // Retrieve the video element according to the desired
  var video = document.getElementById(element_id);
  // Set the given stream as the video source
  video.src = window.URL.createObjectURL(stream);

  // Store a global reference of the stream
  window.peer_stream = stream;
}
