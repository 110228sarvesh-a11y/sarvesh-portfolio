/* =================================
   SARVESH PORTFOLIO JAVASCRIPT
================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MOVING PARTICLES
    =============================== */

    const particleContainer = document.getElementById("particles");

    if (particleContainer) {

        for (let i = 0; i < 70; i++) {

            const particle = document.createElement("div");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                (5 + Math.random() * 10) + "s";

            particle.style.animationDelay =
                Math.random() * 8 + "s";

            const size =
                1 + Math.random() * 3;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            particleContainer.appendChild(particle);
        }
    }


    /* ===============================
       GHOST ASSISTANT
    =============================== */

    const ghost = document.querySelector(".ghost-assistant");

    if (ghost) {

        const button =
            ghost.querySelector(".ghost-button");

        if (button) {

            button.addEventListener("click", () => {

                const text =
                    ghost.querySelector(".ghost-text");

                if (text) {

                    text.textContent =
                        "I can help you explore my skills, projects and experience! 👻";
                }
            });
        }
    }


    /* ===============================
       MOUSE PARTICLE EFFECT
    =============================== */

    document.addEventListener("mousemove", (event) => {

        const spark =
            document.createElement("div");

        spark.style.position = "fixed";
        spark.style.left = event.clientX + "px";
        spark.style.top = event.clientY + "px";

        spark.style.width = "4px";
        spark.style.height = "4px";

        spark.style.borderRadius = "50%";

        spark.style.background = "#72e8ff";

        spark.style.boxShadow =
            "0 0 10px #72e8ff";

        spark.style.pointerEvents = "none";

        spark.style.zIndex = "9998";

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 500);
    });


    /* ===============================
       CONSOLE MESSAGE
    =============================== */

    console.log(
        "%c👻 BOO ONLINE",
        "color:#72e8ff;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cWelcome to Sarvesh's portfolio!",
        "color:#ffffff;font-size:14px;"
    );

});
