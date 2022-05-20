function calculaMediaAluno(nota1, nota2, nota3){
    let resultado = (nota1 + nota2 + nota3) / 3
    if(resultado >= 6){
        console.log("Aprovado")
    } else{
        console.log("Reprovado")
    }
}

for(let i = 0; i < 10; i ++){
    let nota1 = Math.round(Math.random() * 10)
    let nota2 = Math.round(Math.random() * 10)
    let nota3 = Math.round(Math.random() * 10)

    console.log(`Nota 1: ${nota1} - Nota 2: ${nota2} - Nota 3: ${nota3}`)
    calculaMediaAluno(nota1, nota2, nota3);
}