const Employee = require("./employee");
const Util = require("./util");

class Manager extends Employee{
    #bonuses = 2000

    get bonuses () {
        return Util.formatCurrency(this.#bonuses)
    }

    get netPay () {
        console.log('netPay: ', super.netPay)
        console.log('bonuses: ', this.bonuses)
        console.log('utilnetpay', Util.unFormatCurrency(super.netPay))
        console.log('unbonuses', Util.unFormatCurrency(this.bonuses))
        const finalValue = Util.unFormatCurrency(super.netPay) + Util.unFormatCurrency(this.bonuses)
        return Util.formatCurrency(finalValue)
    }

}

module.exports = Manager