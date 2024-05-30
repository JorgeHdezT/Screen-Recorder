# Screen Recorder by HacheTTP_Dev

![Screen Recorder Logo](images/logo_white.png)

## Descripción

Este es un proyecto de grabador de pantalla que te permite capturar la pantalla de tu ordenador con audio. La grabación se guarda automáticamente en formato `.webm`. La interfaz soporta múltiples idiomas, permitiendo una experiencia más inclusiva.

## Características

- Graba la pantalla con audio
- Guarda la grabación en formato `.webm`
- Soporte para múltiples idiomas (Español, Inglés, Francés, Alemán, Ruso y Japonés)

## Uso

### Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu_usuario/screen-recorder.git
    ```
2. Navega hasta el directorio del proyecto:
    ```bash
    cd screen-recorder
    ```
3. Abre `index.html` en tu navegador web preferido.

### Instrucciones

1. Selecciona el idioma en el menú desplegable en la parte superior.
2. Haz clic en **Iniciar grabación** para comenzar a grabar.
3. Selecciona la pantalla o ventana que deseas grabar.
4. Cuando hayas terminado, haz clic en **Detener grabación**.
5. Elige dónde deseas guardar el archivo `.webm`.

## Código

### JavaScript

El archivo principal de JavaScript para la funcionalidad de grabación es `script.js`:

```javascript
let mediaRecorder;

const $button = document.querySelector('button');

$button.addEventListener('click', async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: { frameRate: { ideal: 30 } } });
    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: 'video/webm;codecs=vp8,opus'
    });

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
