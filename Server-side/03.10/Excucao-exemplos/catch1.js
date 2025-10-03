const somaDoisNumeros = (numero1, numero2) => {
    try {
        if (typeof numero1 !== "number" || typeof numero2 !== "number")
            throw new Error("Tipo de dado inválido para efetuar a edição")
        else console.log(`${numero1} + ${numero2} == ${numero1+numero2}`)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("... Eu gostaria de somar mais dois números.\n")
    }
}
somaDoisNumeros(35,9)
somaDoisNumeros(3.5,"9")