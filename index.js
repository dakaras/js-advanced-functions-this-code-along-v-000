function Sandwich(bread, ingredients, name) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.name = name;
    this.describe = function() {
        console.log(
            `Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`
        );
    };
};

const pbandj = new Sandwich(
    'Wheat',
    ['Chunky Peanut Butter', 'Blackberry Preserves'],
    'PB&Jam'
);

const salad = {
    ingredients: [
        'Croutons',
        'Romaine Hearts',
        'Steak',
        'Parmesan',
        'Caesar Dressing'
    ],
    name: 'Steak Caesar'
};

pbandj.describe.call(salad);
const describeSalad = pbandj.describe.bind(salad);
describeSalad();
salad.describe = pbj.describe.bind(salad);

function visitTable() {
    console.log(
        `The server is visiting ${this.name} at table number ${this.tableNumber}.`
    );
};

function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
};

//create new Customer instance
const sally = new Customer('Sally', '4');

//schedule table visit
const visitSally = visitTable.bind(sally);

setTimeout(visitSally, 1000);
