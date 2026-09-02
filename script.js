document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       CLOCK
    ========================================== */

    const clock =
        document.getElementById("clock");


    function updateClock() {

        const now =
            new Date();

        let hours =
            now.getHours();

        let minutes =
            now.getMinutes();

        hours =
            hours.toString().padStart(2, "0");

        minutes =
            minutes.toString().padStart(2, "0");

        clock.textContent =
            hours + ":" + minutes;

    }


    updateClock();

    setInterval(
        updateClock,
        1000
    );



    /* =========================================
       THREE DOT MENU
    ========================================== */

    const menuButton =
        document.getElementById("menuButton");

    const retroMenu =
        document.getElementById("retroMenu");


    menuButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            retroMenu.classList.toggle(
                "open"
            );

        }
    );


    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !retroMenu.contains(event.target) &&
                event.target !== menuButton
            ) {

                retroMenu.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =========================================
       NAVIGATION
    ========================================== */

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const sectionID =
                        item.dataset.section;

                    const section =
                        document.getElementById(
                            sectionID
                        );


                    if (section) {

                        section.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                    }


                    retroMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );



    /* =========================================
       VIEW MY WORK BUTTON
    ========================================== */

    const workButton =
        document.getElementById(
            "workButton"
        );


    workButton.addEventListener(
        "click",
        function () {

            document
                .getElementById("projects")
                .scrollIntoView({
                    behavior:
                        "smooth"
                });

        }
    );



    /* =========================================
       RETRO ROBOT
    ========================================== */

    const robot =
        document.getElementById(
            "retroRobot"
        );

    const robotMessage =
        document.getElementById(
            "robotMessage"
        );


    const robotMessages = [

        "HELLO HUMAN :)",
        "SYSTEM ONLINE",
        "NICE TO MEET YOU!",
        "WANT TO SEE MY PROJECTS?",
        "KEEP EXPLORING...",
        "SARVESH.EXE LOADED",
        "BEEP BOOP!",
        "YOU FOUND ME!",
        "CLICK THE 3 DOTS ↑",
        "WELCOME TO THE MATRIX",
        "ERROR 404: BORING PORTFOLIO",
        "I LIKE THIS WEBSITE 👀"

    ];


    let robotClick =
        0;


    robot.addEventListener(
        "click",
        function () {

            robot.classList.remove(
                "active"
            );


            /* Restart animation */

            void robot.offsetWidth;


            robot.classList.add(
                "active"
            );


            robotClick++;


            const message =
                robotMessages[
                    robotClick %
                    robotMessages.length
                ];


            robotMessage.textContent =
                message;


            /* Change face */

            const mouth =
                document.querySelector(
                    ".robot-mouth"
                );


            if (
                robotClick % 2 === 0
            ) {

                mouth.textContent =
                    "⌣";

            } else {

                mouth.textContent =
                    "─";

            }

        }
    );



    /* =========================================
       ROBOT IDLE MESSAGES
    ========================================== */

    let idleIndex =
        0;


    setInterval(
        function () {

            if (
                document.hidden
            ) {

                return;

            }


            idleIndex++;


            if (
                idleIndex >=
                robotMessages.length
            ) {

                idleIndex = 0;

            }


            robotMessage.textContent =
                robotMessages[
                    idleIndex
                ];

        },

        7000

    );



    /* =========================================
       PROJECT DATA
    ========================================== */

    const projectData = {

        ecommerce: {

            number: "01",

            title:
                "E-COMMERCE WEBSITE",

            description:
                "A web-based e-commerce project created using HTML, CSS and JavaScript. It focuses on creating a simple and interactive shopping experience.",

            tech:
                "HTML + CSS + JAVASCRIPT"

        },


        waste: {

            number: "02",

            title:
                "WASTE COLLECTION & RECYCLING",

            description:
                "A Python project concept focused on waste collection and recycling. The idea explores how technology can help make waste management more organised.",

            tech:
                "PYTHON"

        },


        ai: {

            number: "03",

            title:
                "AI IN EVERYDAY LIFE",

            description:
                "A project exploring the role of Artificial Intelligence in everyday life and how AI-based technologies are becoming part of our daily activities.",

            tech:
                "PYTHON + AI"

        }

    };



    /* =========================================
       PROJECT MODAL
    ========================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    const modal =
        document.getElementById(
            "projectModal"
        );

    const modalClose =
        document.getElementById(
            "modalClose"
        );

    const modalNumber =
        document.getElementById(
            "modalNumber"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );

    const modalTech =
        document.getElementById(
            "modalTech"
        );


    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const project =
                        projectData[
                            card.dataset.project
                        ];


                    if (!project) {

                        return;

                    }


                    modalNumber.textContent =
                        project.number;

                    modalTitle.textContent =
                        project.title;

                    modalDescription.textContent =
                        project.description;

                    modalTech.textContent =
                        project.tech;


                    modal.classList.add(
                        "show"
                    );

                }
            );

        }
    );



    /* CLOSE MODAL */

    modalClose.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

        }
    );


    /* CLICK OUTSIDE MODAL */

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                modal.classList.remove(
                    "show"
                );

                retroMenu.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =========================================
       RANDOM CRT FLICKER
    ========================================== */

    setInterval(
        function () {

            const device =
                document.querySelector(
                    ".retro-device"
                );


            device.style.opacity =
                "0.985";


            setTimeout(
                function () {

                    device.style.opacity =
                        "1";

                },
                50
            );

        },
        6000
    );



    /* =========================================
       CONSOLE
    ========================================== */

    console.log(
        "================================"
    );

    console.log(
        " SARVESH PORTFOLIO SYSTEM ONLINE "
    );

    console.log(
        " RETRO MODE: ENABLED "
    );

    console.log(
        " ROBOT: ONLINE "
    );

    console.log(
        "================================"
    );

});
function openWasteProject() {
    window.open(
        "YOUR_GITHUB_PROJECT_LINK",
        "_blank"
    );
}
