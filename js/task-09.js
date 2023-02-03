function getRandomHexColor() {
    let result = `#${Math.floor(Math.random() * 16777215)
       .toString(16)
       .padStart(6, 0)}`;
       return result
   }


  const onChangeColorBtn = document.querySelector('.change-color');
  const hexColorValue = document.querySelector('.color');

  onChangeColorBtn.addEventListener('click',() => {
    let result = getRandomHexColor();

    hexColorValue.textContent = result
    document.body.style.backgroundColor = result
  }  
  );

