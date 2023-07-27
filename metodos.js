const pessoa1 = {
    nome: "Ricardo",
    idade: 39,
    altura: 1.79,
    profissao: "estudante de Programação",
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem)";
        } else if (this.idade < 66) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    },

    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Olá! Meu nome é ${this.nome}, sou um ${this.determinarFaixaEtaria()} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`)
    }

}
pessoa1.apresentar()
