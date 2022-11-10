console.log('all cats ready...');

const getAllCats = () => {
    fetch('http://localhost:3377/api/cats', {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

getAllCats();