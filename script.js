function resps() {
    for (var c = 1; c < 11; c++) {
        if (document.getElementById('r' + c).value == "") {
            alert('A Questão ' + c + ' Não pode ficar vazia!');
        } else {
            if (c == 1) {
                if (document.getElementById('r' + c).value == "C") {
                    document.getElementById('spinner').innerText = "Você acertou a 1 pergunta!";
                } else {
                    document.getElementById('spinner').innerHTML = "Resposta Errada!"
                }
            }
        }
    }
}   