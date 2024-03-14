var idade = 100

console.log("Voce tem " + idade + " anos")

if (idade < 16) {
    console.log("nao vota")
} else if (idade < 18 || idade > 67) {
    console.log("voto opcional")
}
else {
    console.log("voto obrigatorio")
}
