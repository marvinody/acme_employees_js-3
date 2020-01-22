const employees = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 4, name: 'shep', managerId: 2 },
  { id: 3, name: 'curly', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 3 },
  { id: 6, name: 'harpo', managerId: 5 },
  { id: 8, name: 'shep Jr.', managerId: 4 },
  { id: 99, name: 'lucy', managerId: 1 }
]

// great variable names! clear & concise
const findEmployeeByName = (name, employees) => {
  // what does filter return?
  return employees.filter(emps => {
    if (name === emps.name) {
      // console.log("In findEmployee func");
      // console.log(emps);
      return emps
    }
  })[0] // what array method do you use right below this?
  // if you find yourself doing arr.filter()[0], you should probably look to a find!
}

// I believe the first param (name) isn't a name, but an employee object
// remember to make your variable names what they actually stand for
const findManagerFor = (name, employees) => {
  return employees.find(val => { // good use of find
    if (val.id === name.managerId) {
      return val
    }
  })
}

const findCoworkersFor = (name, employees) => {
  // ooooo, super close. when do we use map vs filter?
  // we can talk more about it in office hours if you want
  return employees.map(emps => {
    if (emps.managerId === name.managerId) {
      return emps
    }
  })
}

// it seems like you may have been going for some recursion (you have a base case)
// but your recursive case needs to be revisited
const findManagementChainForEmployee = (name, employees) => {
  if (!name.managerId) { return [] }
  else {
    let result = employees.filter(emps => {
      if (name.managerId >= emps.id) {
        return emps
      }
    })
    result.pop()
    return result
  }
}

const generateManagementTree = employees => {
  const manager = employees.find(emp => emp.mangerId === undefined)
  let updatedEmps = employees.filter(emps => emps.id !== manager.id)
  console.log(updatedEmps)
}

console.log(findEmployeeByName('moe', employees))
