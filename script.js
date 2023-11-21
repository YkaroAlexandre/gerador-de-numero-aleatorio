function submit(){
    var min = document.getElementById('input_min').value;

    var max = document.getElementById('input_max').value;

    min = parseInt(min);
    max = parseInt(max);

    listSorteio = [];
    
    for (var i = 0; i <= 100; i++) {
        listSorteio.push(i);
    };

    var listNum = [];
    for(var i = min;i < max+1; i++){
        listNum.push(i)
    };


    if (isNaN(min) || isNaN(max)) {

        var error = document.getElementById("div_error");
        
        error.innerHTML = "Coloque valores válidos nos campos acima!";

        setTimeout(() => {
            location.reload();
        }, 5000);

    };

    var divNum = document.getElementById('div_num');

    var numeroGerado = min + Math.floor(Math.random() * ((max-min) + 1));


    // Exibe os números antes do sorteio
    setTimeout(() => {
        for (var i = 0; i < listSorteio.length; i++) {
            (function (index) {
                setTimeout(() => {
                    var numeroSorteado = listSorteio[Math.floor(Math.random() * listSorteio.length)];
                    divNum.innerHTML = numeroSorteado;
                }, 10 * index);
            })(i);
        }
    
    },520);
    
    
    // Sorteia um número aleatório do array e exibe
    setTimeout(() => {
        var numeroSorteado = listNum[Math.floor(Math.random() * listNum.length)];
        divNum.innerHTML = numeroSorteado;
        exibirConfetes();
    }, 2000  );
}


function reset (){
    
}
