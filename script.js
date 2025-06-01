function resps() {
    for (var c = 1; c < 11; c++) {
        if (document.getElementById('r' + c).value == "") {
            alert('A Questão ' + c + ' Não pode ficar vazia!');
        } else {
            if (c == 1) {
                if (document.getElementById('r' + c).value == "C") {
                    alert('Você acertou a primeira pergunta!');
                }
            }
        }
    }
}   