console.log('all cats ready...');
const catList = document.getElementById('cat-list');

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
