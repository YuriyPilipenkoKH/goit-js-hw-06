const fontSizeChanger = document.querySelector('#font-size-control');
const font = document.querySelector("#text");

fontSizeChanger.addEventListener("input", (event) => {
    font.style.fontSize = `${event.currentTarget.value}px`;

})