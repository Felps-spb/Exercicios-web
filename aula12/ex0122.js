
var agora = new Date()
var hora = agora.getHours()

console.log("agora sao exatamente " + hora + " horas")

if (hora > 12) {
    console.log('esta de tarde')
} else if (hora > 18) {
    console.log('esta de noite')

} else {
    console.log('esta de manha')
}