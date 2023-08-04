const url = 'https://api-dishes.vercel.app/';

async function loadDish() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error('ERROR API');
        }
        return response.json();

    } catch (error) {
        console.log(error);
    }
}

async function findById(id_product) {
    try {
        const response = await fetch(url + id_product);
        if (!response.ok) {
            throw new Error('ERROR API');
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
}


async function addInventory(material) {
    try {
        const response = await fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(material) });
        if (!response) {
            throw new error('ERROR API');
        }
    } catch (error) {
        console.log(error);
    }
}

async function addInventory(material) {
    try {
        const response = await fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(material) });
        if (!response) {
            throw new error('ERROR API');
        }
    } catch (error) {
        console.log(error);
    }
}




module.exports.loadDish = loadDish;
module.exports.addInventory = addInventory;
module.exports.findById = findById;
