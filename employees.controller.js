var employees = {
        employee1: {
          firstname: "Shraddha",
          lastname: "Pandey",
          email: "sp@gmail.com",
          id: 1
        },
        employee2: {
          firstname: "Swati",
          lastname: "Shukla",
          email : "sw@gmail.com",
          id: 2
        },
      }
 
exports.create = function(req, res) {
  var newEmployee = req.body;
  console.log (newEmployee);
    employees["employee" + newEmployee.id] = newEmployee;
    console.log(" After Post, employees:\n" + JSON.stringify(employees, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newEmployee, null, 4));
};
 
exports.findAll = function(req, res) {
    console.log(" Find All: \n" + JSON.stringify(employees, null, 4));
    res.end("All employees: \n" + JSON.stringify(employees, null, 4));  
};
 
exports.findOne = function(req, res) {
    var employee = employees["employee" + req.params.id];
    console.log(" Find employee: \n" + JSON.stringify(employee, null, 4));
    res.end( "Find a employee:\n" + JSON.stringify(employee, null, 4));
};
 
exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedEmployee = req.body; 
  if(employees["employee" + id] != null){
    // update data
    employees["employee" + id] = updatedEmployee;
 
    console.log(" Update Successfully, employees: \n" + JSON.stringify(employees, null, 4))
    
    // return
    res.end("Update Successfully! \n" + JSON.stringify(updatedEmployee, null, 4));
  }else{
    res.end("Don't Exist Employee:\n:" + JSON.stringify(updatedEmployee, null, 4));
  }
};
 
exports.delete = function(req, res) {
  var deleteEmployee = employees["employee" + req.params.id];
    delete employees["employee" + req.params.id];
    console.log(" After deletion, employee list:\n" + JSON.stringify(employees, null, 4) );
    res.end( "Deleted employee: \n" + JSON.stringify(deleteEmployee, null, 4));
};