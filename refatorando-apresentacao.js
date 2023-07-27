const dadosPessoa = [{
        nome: "Ricardo",
        idade: 39,
        altura: 1.79,
        profissao: "estudante de Programação"
},
{
        nome: "Tatu",
        idade: 39,
        altura: 1.79,
        profissao: "musico"

}
]
function apresentar(pessoas) {
        pessoas.forEach((pessoa) => {
                if (pessoa.idade >= 18 && pessoa.idade < 66) {
                        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto(a) de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
                } else if (pessoa.idade >= 66) {
                        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso(a) de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
                } else {
                        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
                }
        })
}
apresentar(dadosPessoa)

