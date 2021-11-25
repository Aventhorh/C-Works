const formButton = document.querySelector('.form__button');
const formButtonTwo = document.getElementById('form__button')

window.addEventListener("resize", function () {
    if (document.body.clientWidth < 768) {
        formButton.textContent = "✌️";
        formButtonTwo.textContent = "✌️";
    } else {
        formButtonTwo.textContent = "Отремонтируйте камеру ✌️";
        formButton.textContent = "Отремонтируйте камеру ✌️"
    }
});