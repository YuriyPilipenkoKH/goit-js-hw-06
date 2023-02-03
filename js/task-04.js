const counterValue = 0;

const counter = {
    value: 0,
    increment() {
        // console.log('increment —> this', this);
        this.value +=1;
    },
    decrement() {
        // console.log('decrement —> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function() {
    // console.log('click—dec');

    counter.decrement();
    // console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function() {
    // console.log('click—inc');

    counter.increment();
    // console.log(counter);
    valueEl.textContent = counter.value;
});