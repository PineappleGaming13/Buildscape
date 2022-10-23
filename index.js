let block1 = {
    name: 'Stone', 
    amount: 5
};

function displayBlock(name, amount) {
    console.log('You have ' + amount + ' ' + name);
}

displayBlock(block1.name, block1.amount);