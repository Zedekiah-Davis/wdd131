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

const images = [
    {
        description: "Keyboard #1",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-75_-layout-full-aluminum-black-frame-for-Mac-WIndows-Linux-with-RGB-backlight-and-hot-swappable-K-Pro-switch-red.jpg?v=1675158115&width=900"
    },
    {
        description: "Keyboard #2",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-QMK-VIA-custom-mechanical-keyboard-75-percent-layout-full-aluminum-blue-frame-for-Mac-Windows-iOS-RGB-backlight-with-hot-swappable-Gateron-G-Pro-switch-red.jpg?v=1657854465&width=640"
    },
    {
        description: "Keyboard #3",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q1-QMK-VIA-custom-mechanical-keyboard-75-percent-layout-full-aluminum-grey-frame-B-knob-version-for-Mac-Windows-iOS-RGB-backlight-with-hot-swappable-Gateron-G-Pro-switch-blue.jpg?v=1657854465&width=640"
    },
    {
        description: "Keyboard #4",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q8-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-65-percent-Alice-layout-full-aluminum-black-frame-for-Mac-Windows-Linux-with-RGB-backlight-hot-swappable-K-Pro-red.jpg?v=1691743450&width=640"
    },
    {
        description: "Keyboard #5",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q8-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-65-percent-Alice-layout-full-aluminum-grey-frame-for-Mac-Windows-Linux-with-RGB-backlight-hot-swappable-K-Pro-brown.jpg?v=1691743595&width=640"
    },
    {
        description: "Keyboard #6",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q6-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-100-percent-layout-full-aluminum-black-frame-for-Mac-WIndows-Linux-with-RGB-backlight-and-hot-swappable-K-Pro-red.jpg?v=1688980366&width=640"
    },
    {
        description: "Keyboard #7",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q6-Pro-QMK-VIA-wireless-custom-mechanical-keyboard-100-percent-layout-full-aluminum-white-frame-for-Mac-WIndows-Linux-with-RGB-backlight-and-hot-swappable-K-Pro-red.jpg?v=1688980466&width=640"
    },
    {
        description: "Keyboard #8",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-Q11-QMK-VIA-75-percent--split-custom-mechanical-keyboard-full-aluminum-frame-for-Mac-Window-Linux-fully-assembled-knob-black-Gateron-G-pro-switch-red.jpg?v=1677317491&width=640"
    },
    {
        description: "Keyboard #9",
        imageUrl: "https://www.keychron.com/cdn/shop/products/Keychron-K6-Pro-QMK-VIA-Wireless-Custom-Mechanical-Keyboard-65-percent-layout-for-Mac-Windows-Linux-PBT-keycaps-PCB-screw-in-stabilizer-and-hot-swappable-Keychron-K-Pro-mechanical-swi_9cee2028-ee3b-414e-8f4e-19b9c59691b9.jpg?v=1659703586&width=640"
    },
];

function addImage(allImages) {
    allImages.forEach(image => {
        let img = document.createElement("img");

        img.setAttribute("src", image.imageUrl);
        img.setAttribute("alt", image.description);
        img.setAttribute("loading", "lazy");
        img.setAttribute("class", "galleryImg");

        img.addEventListener('click', () => {
            const fullScreenContainer = document.createElement('div');
            fullScreenContainer.style.position = 'fixed';
            fullScreenContainer.style.top = '0';
            fullScreenContainer.style.left = '0';
            fullScreenContainer.style.width = '100%';
            fullScreenContainer.style.height = '100%';
            fullScreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            fullScreenContainer.style.display = 'flex';
            fullScreenContainer.style.justifyContent = 'center';
            fullScreenContainer.style.alignItems = 'center';

            const fullScreenImage = document.createElement('img');
            fullScreenImage.src = img.src;

            if (img.height < 250) {
                fullScreenImage.style.width = '80%';
                fullScreenImage.style.height = 'auto';
            } else {
                fullScreenImage.style.width = 'auto';
                fullScreenImage.style.height = '100%';
            }

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '50%';
            closeButton.style.padding = '10px';
            closeButton.style.cursor = 'pointer';

            closeButton.addEventListener('click', () => {
                document.body.removeChild(fullScreenContainer);
            });

            fullScreenContainer.appendChild(fullScreenImage);
            fullScreenContainer.appendChild(closeButton);
            document.body.appendChild(fullScreenContainer);
        });

        document.querySelector(".images-grid").appendChild(img);
    });
}

addImage(images);

let numVisits = Number(window.localStorage.getItem("galleryVisits-ls")) || 0;
numVisits++;
localStorage.setItem("galleryVisits-ls", numVisits);
