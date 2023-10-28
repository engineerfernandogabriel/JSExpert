class Util{
    static #defaultFormat = Intl.NumberFormat("pt-Br", {
        currency: "BRL",
        sytle: "currency",
        minimumFractionDigits: 2
    })

    static formatCurrency(value){
        return this.#defaultFormat.format(value)
    }

    static unFormatCurrency(value){
        /*
            Descrição da regex:
                \D --> retira os dígitos
                g --> indica que a correspondência deve ocorrer globalmente em toda a string. 
                    Se remover o modificador g da expressão regular /\D/, a correspondência será feita apenas com o primeiro caractere não numérico encontrado na string
                /100 --> divisão por 100 no final é para voltar a vírgula na casa dos centavos        
        */

        return Number(value.replace(/\D/g, '')) / 100
        
    }
}

module.exports = Util