const mongoose = require('mongoose');

//map global promises - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb+srv://customerCLI:olusogaolalekan@shoga.mtg7q.mongodb.net/?retryWrites=true&w=majority');
//Import model
const Customer = require('./models/customer' );

//add customer
module.exports.addCustomer = (customer)=> {
    Customer.create(customer).then(customer =>{
        console.log('New customer added');
        
    })
}

//find customer{

module.exports.findCustomer= (name) =>{
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{fistname: search},{lastname:search}]})
    .then(customer=>{
        console.info(customer);
        console.info(`${customer.length} matches`)
        
    })
}

module.exports.updateCustomer = (_id, customer) =>{
    Customer.update({_id}, customer)
    .then(customer=>{
        console.info('customer updated');
    })
}

module.exports.removeCustomer = (_id, customer)=> {
    Customer.deleteOne({_id}, customer)
    .then(customer=>{
        console.info('customer removed')
    })
}
module.exports.listCustomer= () =>{
    Customer.find()
    .then(customers=>{
        console.info(customers);
        console.info(`${customers.length} matches`)
        
    })
}