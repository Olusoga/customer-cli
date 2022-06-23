#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer')
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./app.js');

// Customer questions

const questions = [{
    type: 'input',
    name: 'firstname',
    message: 'customer firstname'
},
{
    type: 'input',
    name: 'lastname',
    message: 'customer lastname'
},
{
    type: 'input',
    name: 'phone',
    message: 'customer phone'
},
{
    type: 'input',
    name: 'email',
    message: 'customer emailaddress'
}]

program
    .version('1.0.0')
    .description('Client Management System')

// program
//     .command('Add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname, lastname, phone, email)=> {
//         addCustomer({firstname, lastname, phone, email});
//     });
program

    .command('Add')
    .alias('a')
    .description('Add a customer')
    .action(()=>{
        prompt(questions).then(answers => addCustomer(answers))
    })
program
    .command('find name')
    .alias('f')
    .description('Find customer')
    .action((name)=> {
        findCustomer(name)
    })

 program

    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action(()=>{
        prompt(questions).then(answers => updateCustomer(_id, answers));
    });

program

    .command('Remove  <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id));

program
    .command('list')
    .alias('l')
    .description('list customers')
    .action(()=>listCustomer());

 program.parse(process.argv);