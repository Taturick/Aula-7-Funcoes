const dadosPessoa = [
    {
      nome: "Ricardo",
      idade: 39,
      altura: 1.79,
      profissao: "estudante de Programação"
    },
    {
      nome: "Tatu",
      idade: 39,
      altura: 1.79,
      profissao: "músico"
    }
  ];
  
  function apresentar(pessoa) {
    if (Array.isArray(pessoa)) {
      pessoa.forEach((p) => {
        apresentarPessoa(p);
      });
    } else {
      let idadeGrupo;
      if (pessoa.idade >= 18 && pessoa.idade < 66) {
        idadeGrupo = "adulto(a)";
      } else if (pessoa.idade >= 66) {
        idadeGrupo = "idoso(a)";
      } else {
        idadeGrupo = "jovem";
      }
  
      console.log(
        `Olá! Meu nome é ${pessoa.nome}, sou um ${idadeGrupo} de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`
      );
    }
  }
  
  // Exemplo de chamada para mostrar todos os dados no array
  apresentar(dadosPessoa);
  
  // Exemplo de chamada para mostrar somente o índice na posição 0 do array
  apresentar(dadosPessoa[0]);
  