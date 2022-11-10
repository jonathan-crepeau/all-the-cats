console.log('newCat.js ready for duty...');
const catBtn = document.getElementById('cat-btn');

catBtn.addEventListener('click', () => {
    console.log('Cat button clicked!');

const nameInput = document.getElementById('cat-name');
const colorInput = document.getElementById('cat-color');

const newCat = {
    name: nameInput.value,
    color: colorInput.value,
};

fetch('http://localhost:3377/api/cats/new', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCat),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});