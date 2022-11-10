console.log('all cats ready...');
const catList = document.getElementById('cat-list');

const handleClick = (event) => {
    console.log('delete button clicked.')
    if (event.target.classList.contains('delete')) {
        const catId = event.target.parentNode.id;

        fetch(`http://localhost:3377/api/cats/delete/${catId}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(() => getAllCats())
            .catch((err) => console.log(err));
    }
};

catList.addEventListener('click', handleClick);

const render = (catArr) => {
    const template = catArr.map((cat) => {
        return `
            <li id="${cat._id}">${cat.name}<button class="delete">&times;</button></li>
        `;
    }).join('');

    catList.innerHTML = '';
    catList.insertAdjacentHTML('afterbegin', template);
};

async function getAllCats () {
    await fetch('http://localhost:3377/api/cats', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => render(data))
        .catch((err) => console.log(err));
};

getAllCats();
