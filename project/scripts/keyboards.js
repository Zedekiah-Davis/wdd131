document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let description = document.createElement("p");

description.innerHTML = `A custom keyboard is a personally assembled keyboard where each component is chosen to fit the user's specific preferences, offering a unique blend of style, comfort, and functionality. From choosing switches to designing the layout, custom keyboards provide a tailored typing experience that stock keyboards often lack.<br>
                <br>
                Building a custom keyboard involves selecting individual components, including the case, switches, keycaps, and stabilizers. You'll assemble the parts, possibly solder the switches onto the board, and customize the layout and design to suit your needs.<br>
                <br>
                Customizing a keyboard affects both aesthetics and functionality. Personalized elements like keycap designs and switch types can enhance typing comfort, improve speed, and add a satisfying tactile response, ultimately making typing a more enjoyable and productive experience.`;

document.querySelector(".homeDiv").appendChild(description);

let sched = document.createElement("section");
let schedDay = document.createElement("h3");
let schedP = document.createElement("p");

schedDay.textContent = "Steps to Building Your Own Custom Keyboard";
schedP.textContent = "1. Select a keyboard layout and case, 2. Choose and install switches, 3. Attach stabilizers for larger keys, 4. Apply keycaps, and 5. Test and adjust as needed for optimal performance.";

document.querySelector("main").appendChild(sched);
sched.appendChild(schedDay);
sched.appendChild(schedP);

let join = document.createElement("section");
let howTo = document.createElement("h3");
let parajoin = document.createElement("p");

howTo.textContent = "Want to Learn More About Custom Keyboards? ";
parajoin.innerHTML = `Explore online communities and resources dedicated to custom keyboards for guides, tips, and inspiration.`;

document.querySelector("main").appendChild(join);
join.appendChild(howTo);
join.appendChild(parajoin);

let numVisits = Number(window.localStorage.getItem("homeVisits-ls")) || 0;
numVisits++;
localStorage.setItem("homeVisits-ls", numVisits);