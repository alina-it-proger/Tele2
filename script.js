document.addEventListener('DOMContentLoaded', () => {
    const cityNameButton = document.getElementById('cityName');
    const cityDialog = document.getElementById('cityDialog');
    const nameCityParagraph = document.getElementById('nameCity'); 
    const initialButtons = document.getElementById('initialButtons');
    const cityListTemplate = document.getElementById('cityListTemplate').content;

//запись локалстордж
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
        cityNameButton.innerText = storedCity;
    }

    cityNameButton.addEventListener('click', () => {
        initialButtons.style.display = 'block';
        nameCityParagraph.textContent = 'Ваш город ' + cityNameButton.textContent + '?';
        cityDialog.showModal();
    });

    window.confirmCity = function() {
        cityDialog.close();
    };

    window.showCityList = function() {
        initialButtons.style.display = 'none'; 
        nameCityParagraph.style.display = 'none';

        const clone = document.importNode(cityListTemplate, true);
        cityDialog.appendChild(clone);
        cityDialog.querySelector('#citySelection').style.display = 'block';
    };

    cityDialog.addEventListener('click', event => {
        if (event.target.classList.contains('city1')) {
            const selectedCity = event.target.innerText;
            cityNameButton.innerText = selectedCity;
            localStorage.setItem('selectedCity', selectedCity);
            closeDialog(); 
        }
    });
    
    function closeDialog() {
        const citySelection = cityDialog.querySelector('#citySelection');
        if (citySelection) {
            citySelection.remove();
        }
        initialButtons.style.display = 'block'; 
        nameCityParagraph.textContent = 'Ваш город ' + cityNameButton.textContent + '?';
        nameCityParagraph.style.display = 'block';
        cityDialog.close();
    }
});
