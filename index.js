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

const findEmployeeByName = (name, employees) => {
  return employees.filter(emps => {
    if (name === emps.name) {
      // console.log("In findEmployee func");
      // console.log(emps);
      return emps
    }
  })[0]
}

const findManagerFor = (name, employees) => {
  return employees.find(val => {
    if (val.id === name.managerId) {
      return val
    }
  })
}

const findCoworkersFor = (name, employees) => {
  return employees.map(emps => {
    if (emps.managerId === name.managerId) {
      return emps
    }
  })
}

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
