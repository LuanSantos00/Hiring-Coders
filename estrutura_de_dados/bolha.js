var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function orderna(){
    let inicio = 0;
    let fim = 8;
    let tmp;

    for(vezes = 0; vezes < 8; vezes++)
    {
        for(pos = inicio; pos < fim - 1 - vezes; pos++){
            if(valores[pos] > valores[pos + 1]){
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos] = tmp;
            }
        }
    }
    
}

orderna();
console.log("Vetor ordenado...");
console.log(valores);