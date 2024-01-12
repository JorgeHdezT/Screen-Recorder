let mediaRecorder;

const $button = document.querySelector('button');

$button.addEventListener('click', async () => {
  try {
    // Obtén el flujo de audio y video del sistema
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: { frameRate: { ideal: 30 } } });

    // Utiliza una instancia de MediaRecorder para el audio y video del sistema
    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: 'video/webm;codecs=vp8,opus'
    });
// aqui estuvo chopo
    const chunks = [];

    mediaRecorder.addEventListener("dataavailable", (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    });

    mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: 'video/webm;codecs=vp8,opus' });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "captura_video.webm";
      link.click();
    });

    mediaRecorder.start();

  } catch (error) {
    console.error("Error:", error);
  }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  try {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
