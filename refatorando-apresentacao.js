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
        profissao: "músico"
    }
    ];
    
    function apresentar(pessoas) {
        if (Array.isArray(pessoas)) {
            pessoas.forEach((pessoa) => {
                apresentarPessoa(pessoa);
            });
        } else {
            apresentarPessoa(pessoas);
        }
    }
    
    function apresentarPessoa(pessoa) {
        if (pessoa.idade >= 18 && pessoa.idade < 66) {
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto(a) de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
        } else if (pessoa.idade >= 66) {
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso(a) de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
        } else {
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
        }
    }
    
    // Exemplo de chamada para mostrar todos os dados no array
    apresentar(dadosPessoa);
    
    // Exemplo de chamada para mostrar somente o índice na posição 0 do array
    apresentar(dadosPessoa[0]);
    