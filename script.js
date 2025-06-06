function resps() {
    for (var c = 1; c < 11; c++) {
        if (document.getElementById('r' + c).value == "") {
            alert('A Questão ' + c + ' Não pode ficar vazia!');
        } else {
            if (c == 1) {
                if (document.getElementById('r' + c).value == "C") {
                    document.getElementsByClassName('success-o3').style.display = 'inline';
                } else {
                    document.getElementsByClassName('success-o1').style.display = 'inline';
                    document.getElementsByClassName('success-o2').style.display = 'inline';
                    document.getElementsByClassName('success-o4').style.display = 'inline';
                }
            }
        }
    }
}   