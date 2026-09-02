document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOVING PARTICLES
    ========================================= */

    const particles = document.getElementById("particles");

    if (particles) {

        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {

            const particle =
                document.createElement("div");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.animationDuration =
                (6 + Math.random() * 12) + "s";

            particle.style.animationDelay =
                Math.random() * 12 + "s";

            const size =
                Math.random() * 3 + 1;

            particle.style.width =
                size + "px";

            particle.style.height =
                size + "px";

            particles.appendChild(particle);
        }
    }


    /* =========================================
       BOO ASSISTANT
    ========================================= */

    const ghost =
        document.getElementById("ghost");

    const bubble =
        document.getElementById("ghost-bubble");


    if (ghost && bubble) {

        ghost.addEventListener("click", function () {

            bubble.innerHTML =
                "HEY! 👻<br>" +
                "<span>I'm Boo — your portfolio assistant!</span>";

            setTimeout(function () {

                bubble.innerHTML =
                    "Hey! I'm Boo 👻<br>" +
                    "<span>Need a tour?</span>";

            }, 4000);

        });

    }


    /* =========================================
       SMOOTH PROJECT BUTTON BEHAVIOUR
    ========================================= */

    const projectButtons =
        document.querySelectorAll(".project-button");

    projectButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            if (button.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "🚧 This project page is coming soon!"
                );

            }

        });

    });


    /* =========================================
       CONSOLE
    ========================================= */

    console.log(
        "👻 BOO ONLINE"
    );

    console.log(
        "⚡ SARVESH PORTFOLIO SYSTEM ONLINE"
    );

    console.log(
        "✨ PARTICLE SYSTEM ACTIVE"
    );

});
