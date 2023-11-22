function submit(){

    var historico = document.getElementById('div_historico');

    var divNum = document.getElementById('div_num');

    // Pegando o mínimo e passando para inteiro.
    var min = document.getElementById('input_min').value;
    min = parseInt(min);

    // Pegando o máximo e passando para inteiro.
    var max = document.getElementById('input_max').value;
    max = parseInt(max);

    // Lista para colocar os números que vão aparecer antes de mostrar o número randômico.
    listSorteio = [];
    for (var i = 0; i <= 100; i++) {
        listSorteio.push(i);
    };

    if (isNaN(min) || isNaN(max)) {

        var error = document.getElementById("div_error");
        
        error.innerHTML = "Coloque valores válidos nos campos acima!";

        // Função para recarregar a página.
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {

        // Exibe os números antes do sorteio, para dar um efeito de roleta.
        for (var i = 0; i < listSorteio.length; i++) {
            (function (index) {
                setTimeout(() => {
                    var numeroSorteado = listSorteio[Math.floor(Math.random() * listSorteio.length)];
                    divNum.innerHTML = numeroSorteado;
                }, 10 * index);
            })(i);
        }

        
    
        // Sorteia um número aleatório do array e exibe
        setTimeout(() => {
            showDivHistorico(document.getElementById('div_historico'))
            var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            divNum.innerHTML = numeroSorteado;
            historico.innerHTML += numeroSorteado + "<br>"
        }, 1300  );
    };
};

// Função para apagar os dados.
function reset (){
    document.getElementById('input_max').value = '';

    document.getElementById('input_min').value = '';

    document.getElementById('div_num').innerHTML = '00'

    document.getElementById('div_historico').innerHTML = ''

    hideDivHistorico(document.getElementById('div_historico'))
};

// Função para mostrar o histórico.
function showDivHistorico(div){
    div.style.display = 'flex';
}

// Função para esconder histórico.
function hideDivHistorico(div){
    div.style.display = 'none';

}