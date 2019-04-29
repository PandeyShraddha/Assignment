module.exports = function(app) {
 
    var employees = require('./employees.controller.js');
 
    // Create a new Customer
    app.post('/api/employees', employees.create);
 
    // Retrieve all Customer
    app.get('/api/employees', employees.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/employees/:id', employees.findOne);
 
    // Update a Customer with Id
    app.put('/api/employees/:id', employees.update);
 
    // Delete a Customer with Id
    app.delete('/api/employees/:id', employees.delete);
}