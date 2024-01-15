// Añade este código al final de tu archivo "script.js"
function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;

    // Objeto con las traducciones
    var translations = {
        "es": {
            "welcome": "Bienvenido a mi grabador de pantalla",
            "startRecording": "Iniciar grabación",
            "stopRecording": "Detener grabación",
            "howItWorks": "¿Cómo funciona?",
            "step1": "Presiona el botón de inicio",
            "step2": "Selecciona la pantalla o ventana que deseas grabar",
            "step3": "Cuando hayas terminado, presiona el botón de detener",
            "step4": "Selecciona dónde deseas guardar el archivo",
            "note": "Nota: El video de salida se guardará como .webm por defecto"
        },
        "en": {
            "welcome": "Welcome to my screen recorder",
            "startRecording": "Start Recording",
            "stopRecording": "Stop Recording",
            "howItWorks": "How does it work?",
            "step1": "Press the start button",
            "step2": "Select the screen or window you want to record",
            "step3": "Whenever you are done, press the stop button",
            "step4": "Select where do you want to save the file",
            "note": "Note: The output video will be saved as .webm as default"
        },
        "fr": {
            "welcome": "Bienvenue dans mon enregistreur d'écran",
            "startRecording": "Commencer l'enregistrement",
            "stopRecording": "Arrêter l'enregistrement",
            "howItWorks": "Comment ça marche?",
            "step1": "Appuyez sur le bouton de démarrage",
            "step2": "Sélectionnez l'écran ou la fenêtre que vous souhaitez enregistrer",
            "step3": "Lorsque vous avez terminé, appuyez sur le bouton d'arrêt",
            "step4": "Sélectionnez où vous souhaitez enregistrer le fichier",
            "note": "Remarque : La vidéo de sortie sera enregistrée en tant que .webm par défaut"
        },
        "de": {
            "welcome": "Willkommen bei meinem Bildschirmrekorder",
            "startRecording": "Aufnahme starten",
            "stopRecording": "Aufnahme stoppen",
            "howItWorks": "Wie funktioniert es?",
            "step1": "Drücken Sie die Starttaste",
            "step2": "Wählen Sie den Bildschirm oder das Fenster aus, das Sie aufzeichnen möchten",
            "step3": "Wenn Sie fertig sind, drücken Sie die Stopp-Taste",
            "step4": "Wählen Sie aus, wo Sie die Datei speichern möchten",
            "note": "Hinweis: Das Ausgabevideo wird standardmäßig als .webm gespeichert"
        },
        "ru": {
            "welcome": "Добро пожаловать в мой экран записи",
            "startRecording": "Начать запись",
            "stopRecording": "Остановить запись",
            "howItWorks": "Как это работает?",
            "step1": "Нажмите кнопку начала",
            "step2": "Выберите экран или окно, которое вы хотите записать",
            "step3": "Когда закончите, нажмите кнопку остановки",
            "step4": "Выберите, куда вы хотите сохранить файл",
            "note": "Примечание: Выходное видео будет сохранено как .webm по умолчанию"
        },
        "ja": {
            "welcome": "私のスクリーンレコーダーへようこそ",
            "startRecording": "録画を開始",
            "stopRecording": "録画を停止",
            "howItWorks": "使い方",
            "step1": "開始ボタンを押してください",
            "step2": "録画したい画面またはウィンドウを選択してください",
            "step3": "終了したら停止ボタンを押してください",
            "step4": "ファイルを保存したい場所を選択してください",
            "note": "注意：出力ビデオはデフォルトで .webm として保存されます"
        }
    };
    

    // Aplica las traducciones al contenido de la página
    document.querySelector("h2").textContent = translations[selectedLanguage]["welcome"];
    document.getElementById("start").textContent = translations[selectedLanguage]["startRecording"];
    document.getElementById("stop").textContent = translations[selectedLanguage]["stopRecording"];
    document.querySelector("#explanation h2").textContent = translations[selectedLanguage]["howItWorks"];
    var steps = document.querySelectorAll("#explanation ol li");
    steps[0].textContent = translations[selectedLanguage]["step1"];
    steps[1].textContent = translations[selectedLanguage]["step2"];
    steps[2].textContent = translations[selectedLanguage]["step3"];
    steps[3].textContent = translations[selectedLanguage]["step4"];
    document.querySelector("#explanation p").textContent = translations[selectedLanguage]["note"];
}
