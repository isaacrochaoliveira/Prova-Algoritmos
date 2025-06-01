function resps() {
    document.getElementsByClassName('spinner').innerHTML('<i class="fa-solid fa-spinner fa-spin-pulse"></i>')
    for (var c = 1; c < 11; c++) {
        if (document.getElementById('r' + c).value == "") {
            alert('A Questão ' + c + ' Não pode ficar vazia!');
        } else {
        }
    }
}   