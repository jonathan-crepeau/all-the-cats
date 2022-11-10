console.log('all cats ready...');

async function getAllCats () {
    await fetch('http://localhost:3377/api/cats', {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

getAllCats();
console.log('Function invoked.');