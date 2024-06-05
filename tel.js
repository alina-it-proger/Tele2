document.addEventListener('DOMContentLoaded', function () {
    var element = document.querySelector('.phone-input'); 
    var maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: true 
    }
    var mask = new IMask(element, maskOptions);

    element.addEventListener('blur', function() {
        if (!element.value) {
            element.placeholder = '+7 (988) 543-32-34';
        }
    });
});