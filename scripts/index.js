const formButton = document.getElementById('form-top');
const formButtonTwo = document.getElementById('form-bot')

window.addEventListener("resize", function () {
    if (document.body.clientWidth < 768) {
        formButton.textContent = "✌️";
        formButtonTwo.textContent = "✌️";
    } else {
        formButtonTwo.textContent = "Отремонтируйте камеру ✌️";
        formButton.textContent = "Отремонтируйте камеру ✌️"
    }
});

formButton.addEventListener('click', function () {
    if (document.body.clientWidth > 768) {
        formButton.textContent = "Круто, спасибо за доверие!";
    } else {
        formButton.textContent = "✌️";
    }
  });

  formButtonTwo.addEventListener('click', function () {
    if (document.body.clientWidth > 768) {
        formButtonTwo.textContent = "Круто, спасибо за доверие!";
    } else {
        formButtonTwo.textContent = "✌️";
    }
});

