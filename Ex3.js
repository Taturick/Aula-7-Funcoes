const dadosPessoa ={
    nome: "Ricardo",
    idade: 39,
    altura: 1.79,
    profissao: "estudante de Programação"
}
function print(pessoa){
    if (pessoa.idade >= 18 && pessoa.idade < 66) {
        return "adulto(a)";
      } else if (pessoa.idade >= 66) {
        return "idoso(a)";
      } else {
       return "jovem";
      }

}

console.log(`Olá! Meu nome é ${dadosPessoa.nome}, sou um ${print(dadosPessoa)} de ${dadosPessoa.idade}, ${dadosPessoa.altura}m de altura e sou ${dadosPessoa.profissao}.`)
