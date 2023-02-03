const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();


    if (event.currentTarget.elements[0].value === "" || event.currentTarget.elements[1].value === "") {
        alert("Field is empty");
    };

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    console.log({mail, password});

    form.reset()
}