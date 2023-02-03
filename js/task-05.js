const textInput = document.getElementById("name-input");

const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
   

    event.currentTarget.value !== "" 
        ?  output.textContent = event.currentTarget.value 
        :  output.textContent = "Anonymous"
    }
  )