document.addEventListener('DOMContentLoaded', function() {
    const cityButton = document.getElementById('cityName');
    const modal = document.querySelector('dialog.modal');
    const confirmButton = document.getElementById('confirmButton');
    const changeCityButton = document.getElementById('changeCityButton');

    cityButton.addEventListener('click', () => {
        modal.showModal();
    });

    confirmButton.addEventListener('click', () => {
        modal.close();
    });


});