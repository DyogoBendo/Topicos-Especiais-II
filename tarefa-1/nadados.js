function classificaNadador(idade){
    if(5 <= idade  && idade <= 7 ){
        console.log("infantil A");
    } else if (idade <= 10) {
        console.log("infantil B");
    } else if (idade <= 13) {
        console.log("juvenil A");
    } else if (idade <= 17){
        console.log("juvenil B");
    } else if (idade > 17){
        console.log("adulto");
    }
}

for(var i = 5; i < 20; i ++){
    console.log("idade: " + i);
    classificaNadador(i)
    console.log();
}