function contar() {

    var inicio = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO, DIGITE ALGO")
    } else {
        res.innerHTML = 'contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (var c = i; c <= f; c += p) {

            res.innerHTML += ` ${c} `
        }


    }

}