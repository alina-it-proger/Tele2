document.addEventListener('DOMContentLoaded', function () {
    var element = document.querySelector('.phone-input');
    var maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false 
    };
    var mask = new IMask(element, maskOptions);

    var form = document.getElementById('promoForm');
    var phoneInput = form.querySelector('.phone-input');
    var responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var phoneNumber = phoneInput.value;

        // Check if the phone number is already used
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
        // Retrieve used phone numbers from local storage
        var usedNumbers = JSON.parse(localStorage.getItem('usedPhoneNumbers')) || [];
        return usedNumbers.includes(phoneNumber);
    }

    function markPhoneNumberAsUsed(phoneNumber) {
        // Retrieve used phone numbers from local storage
        var usedNumbers = JSON.parse(localStorage.getItem('usedPhoneNumbers')) || [];
        usedNumbers.push(phoneNumber);
        // Store the updated list back in local storage
        localStorage.setItem('usedPhoneNumbers', JSON.stringify(usedNumbers));
    }
});