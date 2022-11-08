// Write your solution in this file!

const employee = {
    name: "sam",
    streetAddress: "11 broadway",

};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }

  function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  
  const newEmployee = deleteFromEmployeeByKey(
    employee,
    "name",
    "same"
  );

  function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }
