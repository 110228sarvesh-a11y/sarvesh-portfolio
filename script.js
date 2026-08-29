document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       PARTICLE SYSTEM
    ============================ */

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 100; i++) {

            const p = document.createElement("div");

            p.className = "particle";

            p.style.left =
                Math.random() * 100 + "vw";

            p.style.animationDuration =
                (5 + Math.random() * 10) + "s";

            p.style.animationDelay =
                Math.random() * 10 + "s";

            const size =
                Math.random() * 3 + 1;

            p.style.width = size + "px";
            p.style.height = size + "px";

            particles.appendChild(p);
        }
    }


    /* ============================
       BOO CLICK
    ============================ */

    const ghost =
        document.getElementById("ghost");

    const bubble =
        document.getElementById("ghost-bubble");

    if (ghost && bubble) {

        ghost.addEventListener("click", function () {

            bubble.innerHTML =
                "Hey! 👻<br><span>I'm Boo — your portfolio assistant!</span>";

            setTimeout(function () {

                bubble.innerHTML =
                    "Hey! I'm Boo 👻<br><span>Need a tour?</span>";

            }, 4000);

        });
    }


    /* ============================
       CONSOLE
    ============================ */

    console.log("👻 BOO ONLINE");
    console.log("⚡ Sarvesh Portfolio System Online");

});
