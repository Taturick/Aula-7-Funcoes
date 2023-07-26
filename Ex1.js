const dadosPessoa ={
    nome: "Ricardo",
    idade: 39,
    altura: 1.79,
    profissao: "estudante de Programação"
}
function print(){
    let faixaEtaria = "";
if ( dadosPessoa.idade <=18){
faixaEtaria = "Jovem"
}else {
    faixaEtaria = "Adulto"
}
console.log(`Olá! Meu nome é ${dadosPessoa.nome}, sou um ${faixaEtaria} de ${dadosPessoa.idade}, ${dadosPessoa.altura}m de altura e sou ${dadosPessoa.profissao}.`)
}

print()