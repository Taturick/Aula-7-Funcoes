function checkIdade(idade) {
    if (idade >= 66) {
        return "idoso(a)";
    } else if (idade >= 21) {
        return "Adulto(a)";
    } else { 
        return "Jovem";
    }
}
// let idade = checkIdade(20)
// console.log(idade)

// let idade2 = checkIdade(22)
// console.log(idade2)

// let idade3 = checkIdade(67)
// console.log(idade3)
console.log(checkIdade(20))
console.log(checkIdade(22))
console.log(checkIdade(67))




