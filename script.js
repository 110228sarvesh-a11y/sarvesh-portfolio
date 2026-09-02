document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       CLOCK
    ========================================= */

    const clock =
        document.getElementById("clock");


    function updateClock() {

        const now = new Date();

        let hours =
            now.getHours()
                .toString()
                .padStart(2, "0");

        let minutes =
            now.getMinutes()
                .toString()
                .padStart(2, "0");

        clock.textContent =
            hours + ":" + minutes;

    }


    updateClock();

    setInterval(updateClock, 1000);



    /* =========================================
       THREE DOT MENU
    ========================================= */

    const menuButton =
        document.getElementById("menuButton");

    const gameMenu =
        document.getElementById("gameMenu");


    menuButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            gameMenu.classList.toggle("open");

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                !gameMenu.contains(event.target) &&
                event.target !== menuButton
            ) {

                gameMenu.classList.remove("open");

            }

        }
    );



    /* =========================================
       NAVIGATION
    ========================================= */

    const menuItems =
        document.querySelectorAll(".menu-item");


    menuItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                const sectionID =
                    item.dataset.section;

                const section =
                    document.getElementById(sectionID);


                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                }


                gameMenu.classList.remove("open");

            }
        );

    });



    /* =========================================
       PRESS START
    ========================================= */

    const workButton =
        document.getElementById("workButton");


    workButton.addEventListener(
        "click",
        function () {

            const projects =
                document.getElementById("projects");

            projects.scrollIntoView({
                behavior: "smooth"
            });

        }
    );



    /* =========================================
       DELIVERY CHARACTER
    ========================================= */

    const character =
        document.getElementById(
            "deliveryCharacter"
        );

    const characterMessage =
        document.getElementById(
            "characterMessage"
        );


    const messages = [

        "DELIVERY READY!",

        "PACKAGE SECURED!",

        "QUEST ACCEPTED!",

        "KEEP EXPLORING!",

        "PROJECTS AHEAD!",

        "BEEP BOOP!",

        "GOOD LUCK PLAYER!",

        "SARVESH.EXE ONLINE!",

        "YOU FOUND ME!"

    ];


    let clickCount = 0;


    character.addEventListener(
        "click",
        function () {

            character.classList.remove(
                "active"
            );

            void character.offsetWidth;

            character.classList.add(
                "active"
            );


            clickCount++;


            characterMessage.textContent =
                messages[
                    clickCount %
                    messages.length
                ];

        }
    );



    /* =========================================
       AUTOMATIC CHARACTER MESSAGES
    ========================================= */

    let idleIndex = 0;


    setInterval(
        function () {

            if (document.hidden) {
                return;
            }


            idleIndex++;

            if (
                idleIndex >=
                messages.length
            ) {

                idleIndex = 0;

            }


            characterMessage.textContent =
                messages[idleIndex];

        },
        6000
    );



    /* =========================================
       PROJECT DATA
    ========================================= */

    const projectData = {

        ecommerce: {

            number: "QUEST_01",

            title:
                "E-COMMERCE WEBSITE",

            description:
                "A web-based e-commerce project created using HTML, CSS and JavaScript. It focuses on creating a simple and interactive shopping experience.",

            tech:
                "HTML + CSS + JAVASCRIPT"

        },


        waste: {

            number: "QUEST_02",

            title:
                "WASTE COLLECTION & RECYCLING",

            description:
                "A Python project focused on waste collection and recycling. The system explores how technology can make waste management more organised.",

            tech:
                "PYTHON + PICKLE"

        },


        ai: {

            number: "QUEST_03",

            title:
                "AI IN EVERYDAY LIFE",

            description:
                "A project exploring the role of Artificial Intelligence in everyday life and how AI-based technologies are becoming part of daily activities.",

            tech:
                "PYTHON + AI"

        }

    };



    /* =========================================
       PROJECT MODAL
    ========================================= */

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



    projectCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function (event) {


                /*
                 Prevent the Waste Collection
                 GitHub link from opening the
                 project modal.
                */

                if (
                    event.target.closest(
                        "a.project-open"
                    )
                ) {

                    return;

                }


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

    });



    /* =========================================
       CLOSE MODAL
    ========================================= */

    modalClose.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

        }
    );



    /* =========================================
       CLICK OUTSIDE MODAL
    ========================================= */

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



    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                modal.classList.remove(
                    "show"
                );

                gameMenu.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =========================================
       MOVING PACKAGES
    ========================================= */

    const packages =
        document.querySelectorAll(
            ".package"
        );


    packages.forEach(function (box, index) {

        box.addEventListener(
            "click",
            function () {

                box.style.animation =
                    "none";

                void box.offsetWidth;

                box.style.animation =
                    "packageFloat .5s ease-in-out";

            }
        );

    });



    /* =========================================
       CONSOLE
    ========================================= */

    console.log(
        "================================"
    );

    console.log(
        " SARVESH DELIVERY QUEST "
    );

    console.log(
        " PIXEL MODE: ENABLED "
    );

    console.log(
        " QUEST SYSTEM: ONLINE "
    );

    console.log(
        "================================"
    );

});
