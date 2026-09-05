//creating a data for export

const employeData = [
    { employeeid: 100, name: "Daniel", role: 'Developer', age: 30 },
    { employeeid: 101, name: "John", role: 'Developer', age: 34 },
    { employeeid: 102, name: "Jenifer", role: 'Tester', age: 25 }
]

const fruits = ["Apple", "Oranage", "Pineapple", "Graphs"]

const add = (a, b) => a + b;

// single varaible pass

// module.exports = employeData

//multiple data pass

module.exports = {employeData , fruits, add}