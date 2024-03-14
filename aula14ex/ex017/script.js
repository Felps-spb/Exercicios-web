function gerar() {
    var numero = document.getElementById("txtn")
    var tab = document.getElementById(`seltab`)

    if (numero.value.length == 0) {
        window.alert(`[ERRO] digite um valor`)
    } else {

        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ``
        while (c <= 10) {
            var item = document.createElement(`option`)
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }

    }

}