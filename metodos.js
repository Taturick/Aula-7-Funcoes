function determinarFaixaEtaria(idade){
    if (idade <= 21) {
        return "jovem)";
      } else if (idade < 66) {
        return "adulto(a)";
      } else {
       return "idoso(a)";
      }
    }

const pessoa1 ={
    nome: "Ricardo",
    idade: 39,
    altura: 1.79,
    profissao: "estudante de Programação",
    apresentar: function(){
       const faixaEtaria = determinarFaixaEtaria(this.idade); 

       console.log(`Olá! Meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade}, ${this.altura}m de altura e sou ${this.profissao}.`)
    }

    }

    pessoa1.apresentar()
