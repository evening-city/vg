const cityData = {
    volgograd: { bg: "#2C58DB", hover: "#E54F2E", light: "rgba(44, 88, 219, 0.4)", img: "./img/city/volgograd.webp" },
    perm: { bg: "#D4AA00", hover: "#2EEE4E", light: "rgba(212, 170, 0, 0.4)", img: "./img/city/perm.webp" },
    voronezh: { bg: "#FF2C2C", hover: "#2E5EE6", light: "rgba(170, 36, 44, 0.4)", img: "./img/city/voronezh.webp" },
    omsk: { bg: "#9933FF", hover: "#01923F", light: "rgba(1, 146, 63, 0.4)", img: "./img/city/omsk.webp" },
    krasnodar: { bg: "#008800", hover: "#1F7E1F", light: "rgba(0, 136, 0, 0.4)", img: "./img/city/krasnodar.webp" },
    rostov: { bg: "#DA251D", hover: "#7D27CD", light: "rgba(218, 37, 29, 0.4)", img: "./img/city/rostov.webp" },
    samara: { bg: "#0293DE", hover: "#E55B40", light: "rgba(2, 147, 222, 0.4)", img: "./img/city/samara.webp" },
    'nizhni novgorod': { bg: "#CD201A", hover: "#C4941C", light: "rgba(205, 32, 26, 0.4)", img: "./img/city/nizhni_novgorod.webp" },
    krasnoyarsk: { bg: "#B0151A", hover: "#942727", light: "rgba(176, 21, 26, 0.4)", img: "./img/city/krasnoyarsk.webp" },
    ekaterinburg: { bg: "#55B0E6", hover: "#942727", light: "rgba(85, 176, 230, 0.4)", img: "./img/city/ekaterinburg.webp" },
    novosibirsk: { bg: "#0039A6", hover: "#1DA49E", light: "rgba(0, 57, 166, 0.4)", img: "./img/city/novosibirsk.webp" },
    ufa: { bg: "#8E1315", hover: "#E55FA2", light: "rgba(142, 19, 21, 0.4)", img: "./img/city/ufa.webp" },
    kazan: { bg: "#009747", hover: "#E62E8C", light: "rgba(0, 151, 71, 0.4)", img: "./img/city/kazan.webp" },
    spb: { bg: "#00B16C", hover: "#1C86EE", light: "rgba(0, 177, 108, 0.4)", img: "./img/city/spb.webp" },
    moscow: { bg: "#A8002C", hover: "#E6C200", light: "rgba(168, 0, 44, 0.4)", img: "./img/city/moscow.webp" },
    shymkent: { bg: "#9F003D", hover: "#9F1F1F", light: "rgba(159, 0, 61, 0.4)", img: "./img/city/shykmet.webp" },
    almaty: { bg: "#50C878", hover: "#3F759F", light: "rgba(80, 200, 120, 0.4)", img: "./img/city/almata.webp" },
    astana: { bg: "#004466", hover: "#4B5E2A", light: "rgba(0, 68, 102, 0.4)", img: "./img/city/astana.webp" },
    chelyabinsk: { bg: "#FF962C", hover: "#E63E00", light: "rgba(255, 150, 44, 0.4)", img: "./img/city/chelyabinsk.webp" }
};

const applyCityStyle = (cityName) => {
    if (!cityData[cityName]) return; 
    const { bg, hover, light, img } = cityData[cityName];
    const pageBody = document.querySelector('.page__body') || document.body; 

    if (pageBody) { 
        pageBody.style.backgroundImage = `url(${img})`;
        document.documentElement.style.setProperty('--bg-city', bg);
        document.documentElement.style.setProperty('--bg-city-hover', hover);
        document.documentElement.style.setProperty('--bg-city-20', light);
    }
};


export const city = () => {
    if (!document.querySelector('.city-name')) return;

    const cityButton = document.querySelector('.city-name');
    const cityModal = document.querySelector('.city');
    const cityButtonsContainer = cityModal.querySelector('.city__buttons');
    const cityButtons = Array.from(cityButtonsContainer.querySelectorAll('.city__button'));
    const cityInput = cityModal.querySelector('.input');
    const primaryTitle = document.querySelector('.primary__title');


    const updateCity = (cityName) => { 
        applyCityStyle(cityName); 

        if (!cityData[cityName]) return;

        cityButton.innerHTML = `<img src="./img/tree.svg" alt="auto">${document.querySelector(`[data-city="${cityName}"]`).textContent}`;

        if (primaryTitle) {
            primaryTitle.textContent = document.querySelector(`[data-city="${cityName}"]`).textContent;
        }

        localStorage.setItem('selectedCity', cityName);
    };

    const toggleModal = (state) => {
        cityModal.classList.toggle('active', state);
    };

    cityButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(!cityModal.classList.contains('active'));
    });

    cityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cityName = button.dataset.city;
            updateCity(cityName); 
            cityInput.value = '';
            cityButtons.forEach(btn => (btn.style.display = 'block'));
            toggleModal(false);
        });
    });

    document.addEventListener('click', (e) => {
        if (!cityModal.contains(e.target) && !cityButton.contains(e.target)) {
            toggleModal(false);
        }
    });

    cityInput.addEventListener('input', () => {
        const query = cityInput.value.toLowerCase().trim();
        cityButtons.forEach(button => {
            const cityName = button.textContent.toLowerCase();
            button.style.display = cityName.includes(query) ? 'block' : 'none';
        });
    });

    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
        updateCity(savedCity);
    }
};


export const initializeCityStyle = () => {
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
        applyCityStyle(savedCity); 
    }
};
