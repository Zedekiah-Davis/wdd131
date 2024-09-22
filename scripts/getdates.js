const currentYear = new Date().getFullYear();

const year = document.getElementById("currentyear");

year.textContent = currentYear;

const lastModified = document.lastModified;

const lastModifiedText = document.getElementById("lastModified");

lastModifiedText.textContent = `Last Modified: ${lastModified}`;