const categoryItems = document.querySelectorAll('#categories > li');
console.log('Number of categories:',categoryItems.length);

const itemTiteles = document.querySelectorAll('.item > h2');
const categoryElements = document.querySelectorAll('.item > ul ');
const items = document.querySelectorAll('.item ');


for (let i = 0; i < items.length; i+=1) {
    const element = items[i];
    console.log('Category:',itemTiteles[i].textContent );
    console.log('Elements:',categoryElements[i].childElementCount );
    
}