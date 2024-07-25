document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelector('.phone-input');
    let maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false 
    };
    let mask = new IMask(element, maskOptions);

    let form = document.getElementById('promoForm');
    let phoneInput = form.querySelector('.phone-input');
    let responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let phoneNumber = phoneInput.value;

        if (isPhoneNumberUsed(phoneNumber)) {
            responseMessage.textContent = 'На этот номер уже выслан промокод.';
            responseMessage.classList.add('error');
        } else {
            responseMessage.textContent = 'Промокод выслан на ваш номер.';
            responseMessage.classList.remove('error');
            markPhoneNumberAsUsed(phoneNumber);
        }
    });

    function isPhoneNumberUsed(phoneNumber) {
        let usedNumbers = JSON.parse(localStorage.getItem('usedPhoneNumbers')) || [];
        return usedNumbers.includes(phoneNumber);
    }

    function markPhoneNumberAsUsed(phoneNumber) {
        let usedNumbers = JSON.parse(localStorage.getItem('usedPhoneNumbers')) || [];
        usedNumbers.push(phoneNumber);
        localStorage.setItem('usedPhoneNumbers', JSON.stringify(usedNumbers));
    }
});