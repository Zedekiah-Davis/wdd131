// JavaScript for dynamic footer information
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});

// JavaScript for responsive navigation menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexbur, Idaho, United States",
        dedicated: "2005, July, 30",
        area: 57504,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
      },
      {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taiwan",
        dedicated: "1982, August, 27",
        area: 9945,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
      },
      {
        templeName: "Kaohsiung Taiwan",
        location: "Kaohsiung, Taiwan",
        dedicated: "2023, November, 25",
        area: 10900,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kaohsiung-taiwan-temple/kaohsiung-taiwan-temple-32828-main.jpg"
      },
  ];
  
  const templeGallery = document.getElementById("temple-gallery");
  
  // Function to create temple cards
  function displayTemples(filteredTemples) {
    templeGallery.innerHTML = '';  // Clear gallery
  
    filteredTemples.forEach(temple => {
      const figure = document.createElement('figure');
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy'; // Lazy loading
  
      const figcaption = document.createElement('figcaption');
      figcaption.innerHTML = `
      Location: ${temple.templeName}<br>
      Dedicated: ${temple.dedicated}<br>
      Size: ${temple.area} sq ft
    `;
  
      figure.appendChild(img);
      figure.appendChild(figcaption);
      templeGallery.appendChild(figure);
    });
  }
  
  // Initially display all temples
  displayTemples(temples);
  

const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
const largeTemples = temples.filter(temple => temple.area > 90000);
const smallTemples = temples.filter(temple => temple.area < 10000);

document.querySelector('nav').addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Old':
      displayTemples(oldTemples);
      break;
    case 'New':
      displayTemples(newTemples);
      break;
    case 'Large':
      displayTemples(largeTemples);
      break;
    case 'Small':
      displayTemples(smallTemples);
      break;
    case 'Home':
      displayTemples(temples);
      break;
  }
});
