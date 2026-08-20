// ===============================
// BTS Birthday Website Script
// ===============================

// Elements
const music = document.getElementById("music");
const gift = document.getElementById("gift");
const birthdayContent = document.getElementById("birthdayContent");
const slide = document.getElementById("slide");
const clickText = document.getElementById("clickText");

// ---------------------
// BTS Slideshow
// ---------------------

const photos = [
    "bts/photo1.jpeg",
    "bts/photo2.jpeg",
    "bts/photo3.jpeg",
    "bts/photo4.jpeg",
    "bts/photo5.jpeg"
];

let current = 0;

if (slide) {
setInterval(() => {

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    slide.style.opacity = "0";

    setTimeout(() => {
        slide.src = photos[current];
        slide.style.opacity = "1";
    }, 500);

}, 3000); 
}

// ---------------------
// Stars
// ---------------------

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    stars.appendChild(star);

}

// ---------------------
// Balloons
// ---------------------

const balloonBox = document.getElementById("balloons");

const colors = [
    "#ff4d6d",
    "#ff006e",
    "#ffd60a",
    "#00d4ff",
    "#8a2be2",
    "#00ff99"
];

for (let i = 0; i < 30; i++) {

    let balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    balloon.style.animationDelay =
        Math.random() * 6 + "s";

    balloonBox.appendChild(balloon);

}

// ---------------------
// Gift
// ---------------------

let opened = false;

function openGift() {

    if (opened) return;

    opened = true;

    // Hide click text
    clickText.style.display = "none";

    // Play music
    music.currentTime = 0;

    music.play().then(() => {

        console.log("Music started!");

    }).catch(err => {

        console.log(err);

    });

    // Gift animation
    gift.style.transform = "scale(1.1)";
 
    const lid = document.querySelector(".lid");

if (lid) {
    lid.style.transform = "translateY(-120px) rotate(-35deg)";
}

    // Show birthday content
    birthdayContent.style.display = "block";

    setTimeout(() => {

        birthdayContent.style.opacity = "1";

    }, 100);

    // Fireworks
    firework();

    // Confetti
    confetti();

    // Hide gift
    setTimeout(() => {

        gift.style.display = "none";

    }, 1000);

}

// ---------------------
// Fireworks
// ---------------------

function firework() {

    for (let i = 0; i < 250; i++) {

        let spark = document.createElement("div");

        spark.style.position = "fixed";
        spark.style.left = "50%";
        spark.style.top = "45%";
        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.borderRadius = "50%";
        spark.style.pointerEvents = "none";

        spark.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(spark);

        let angle = Math.random() * 360;

        let distance = 120 + Math.random() * 300;

        spark.animate([

            {
                transform: "translate(0,0)",
                opacity: 1
            },

            {
                transform:
                    `translate(${Math.cos(angle * Math.PI / 180) * distance}px,
                    ${Math.sin(angle * Math.PI / 180) * distance}px)`,

                opacity: 0
            }

        ], {

            duration: 1800,
            easing: "ease-out"

        });

        setTimeout(() => {

            spark.remove();

        }, 1800);

    }

}

// ---------------------
// Confetti
// ---------------------

function confetti() {

    for (let i = 0; i < 200; i++) {

        let c = document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-20px";
        c.style.width = "10px";
        c.style.height = "14px";
        c.style.pointerEvents = "none";

        c.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(c);

        c.animate([

            {
                transform: "translateY(0) rotate(0deg)"
            },

            {
                transform:
                    `translateY(${window.innerHeight + 50}px)
                    rotate(${720 + Math.random() * 720}deg)`
            }

        ], {

            duration: 4000 + Math.random() * 2500

        });

        setTimeout(() => {

            c.remove();

        }, 6500);

    }

}