let hasAnsweredYes = false; // Variable to track if the user has already answered positively

function handleResponse(isYes) {
    const resultElement = document.getElementById("result");
    const optionsElement = document.querySelector(".options");
    const valentineCat = document.getElementById("valentineCat");
    const dancingCatContainer = document.getElementById("dancingCatContainer");

    optionsElement.style.display = "none";

    if (isYes) {
        if (!hasAnsweredYes) {
            // First time the user answers "Yes"
            resultElement.textContent = "lesgoooo se vidva 15ga!";
            valentineCat.style.display = "none";

            // Show dancing cat gif
            dancingCatContainer.style.display = "block";

            // Trigger confetti effect
            triggerConfetti();

            // Set the variable to true after the first positive response
            hasAnsweredYes = true;

            // If on the hypnotizing screen, change to the happy screen on the first "Yes"
            if (document.querySelector(".hypnotizing-container").style.display === "block") {
                // Hide current container
                document.querySelector(".hypnotizing-container").style.display = "none";

                // Show happy cat screen
                document.querySelector(".happy-container").style.display = "block";
            }
        }
    } else {
        resultElement.textContent = "ERROR, wrong answer";
        valentineCat.src = "error-cat.jpg"; // Replace with an image of a disappointed cat

        // Delay the transition to the hypnotizing cat screen (changed to 5 seconds)
        setTimeout(() => {
            // Hide current container
            document.querySelector(".container").style.display = "none";

            // Show hypnotizing cat screen
            document.querySelector(".hypnotizing-container").style.display = "block";
        }, 4000); // 5 seconds delay
    }

    resultElement.classList.remove("hidden");
}

function triggerConfetti() {
    particlesJS("confetti-container", {
        particles: {
            number: { value: 500 },
            color: { value: "#ff3366" },
            shape: {
                type: "image",
                image: {
                    src: "heart.png",
                    width: 100,
                    height: 90,
                },
            },
            opacity: { value: 0.9, random: true, anim: { enable: true, speed: 2, opacity_min: 0 } },
            size: { value: 7, random: true, anim: { enable: true, speed: 6 } },
            move: { enable: true, speed: 8, direction: "top", random: true, straight: true },
            line_linked: {
                enable: false, // Set line_linked to false
            },
        },
        interactivity: { events: { onhover: { enable: false } } },
    });
}

