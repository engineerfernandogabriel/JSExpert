const Employee = require("./employee")
const assert = require("assert")
const EntityBase = require("./EntityBase")
const Util = require("./util")
const Manager = require("./manager")
const { markAsUntransferable } = require("worker_threads")

const CURRENT_YEAR = 2023
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name:"Peter Parker",
        age: 16,
        gender: "male"
    }) 

    assert.deepStrictEqual(employee.name, "Mr. Peter Parker")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthdayYear = 2007
    assert.deepStrictEqual(employee.birthYear, expectedBirthdayYear)

    console.log ('\n ---- employee ---- ')
    console.log ('name: ', employee.name)
    console.log ('age: ' , employee.age)
    console.log ('gender: ', employee.gender)
    console.log ('grossPay: ', employee.grossPay)
    console.log ('netPay: ', employee.netPay)
}


{
    const manager = new Manager({
        name:"May",
        age: 45,
        gender: "female"
    }) 

    assert.deepStrictEqual(manager.name, "Ms. May")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32))

    console.log ('\n ---- manager ---- ')
    console.log ('name: ', manager.name)
    console.log ('age: ' , manager.age)
    console.log ('gender: ', manager.gender)
    console.log ('grossPay: ', manager.grossPay)
    console.log ('netPay: ', manager.netPay)
}