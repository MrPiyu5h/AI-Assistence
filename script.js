const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    // Convert text to voice
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function handleCommands(command) {

        command = command.toLowerCase().trim(); // Normalize command
    console.log("Command received:", command); // Debugging output


        if (command.includes("what is your name") || command.includes("what's your name")) {
            speak("My name is Shakshi.");
        }else if (command.includes("open youtube")) {
            speak("Opening YouTube...");
            window.open("https://www.youtube.com", "_blank");
        } else if (command.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com", "_blank");
        } else if (command.includes("open instagram")) {
            speak("Opening Instagram...");
            window.open("https://www.instagram.com", "_blank");
        } else if (command.includes("open google")) {
            speak("Opening Google...");
            window.open("https://www.google.com", "_blank");
        } 
        else {
            speak("Searching on Google...");
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }

    speak("Hello, how can I help you Piyush?");
    
    // Start recognition after a slight delay to avoid overlapping with speech synthesis
    setTimeout(() => {
        recognition.start();
    }, 1000);

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleCommands(command);
    };

    recognition.onerror = (event) => {
        speak("Sorry, I couldn't understand. Please try again.");
        console.error("Recognition error:", event.error);
    };
});
