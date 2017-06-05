var mysql = require('mysql');


var inquirer = require('inquirer');


var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,

    user: "root",
    password: "",

    database: "Bamazon"
});


connection.connect(function(err) {

    if (err) throw err;

    console.log("Connected to Bamazon as " + connection.threadId);
});


connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {

    if (err) throw err;

    console.log(res);

    askCustomer();
});

var askCustomer = function() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Please enter the id of the product you wish to purchase.\n"
    }, {
        name: "units",
        message: "Please enter the number of units you wish to purchase."
    }]).then(function(answers) {
        id = answers.id;
        units = answers.units;
        console.log("The item id is " + id + "\nThe number of items is: " + units);
    });
};

var stockCheck = function() {

};
