class Util{
    static #defaultFormat = Intl.NumberFormat("pt-br", {
        currency: "BRL",
        sytle: "currency",
    })

    static formatCurrency(value){
        return this.#defaultFormat.format(value)
    }

    static unFormatCurrency(value){
        /*
            Descrição da regex:
                /D/ --> retira os dígitos
                g --> caso os dígitos ocorram em sequência ele apaga também
                /100 --> divisão por 100 no final é para voltar a vírgula na casa dos centavos        
        */

        return Number(value.replace(/\D/g, '')) / 100
        
    }
}

module.exports = Util