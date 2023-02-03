const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (event.currentTarget.elements[0].value === "" || event.currentTarget.elements[1].value === "") {
        alert("Field is empty");
    } else {
        console.log({mail, password});
    }


    form.reset()
}


