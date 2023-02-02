function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const refs = {
    input: document.querySelector("#controls").firstElementChild,
    btnCreate: document.querySelector('button[data-create]'),
    btnDestroy: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
  }
  
  let number = 0;
  let size = 30;
  
  refs.input.addEventListener("input", (event) => {number = event.currentTarget.value;});
  refs.btnCreate.addEventListener("click", () => {createBoxes(number)});
  refs.btnDestroy.addEventListener("click", () => {
    refs.boxes.innerHTML = '';
    size = 30;
  })
  
  function createBoxes(amount) {
    const collection = [];
  
    for (let i = 0; i < amount; i += 1) {
      const element = document.createElement("div");
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = getRandomHexColor();
      collection.push(element);
  
      size += 10;
    }
    
    refs.boxes.append(...collection);
  };
