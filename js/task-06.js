const inputToValidate = document.querySelector('#validation-input');

inputToValidate.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length !== Number(inputToValidate.dataset.length)) {
        inputToValidate.classList.remove('valid');
        inputToValidate.classList.add('invalid');
        } else {
        inputToValidate.classList.remove('invalid');
        inputToValidate.classList.add('valid');
    }
    }
  );