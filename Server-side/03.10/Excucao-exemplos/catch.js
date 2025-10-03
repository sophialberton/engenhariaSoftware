const saudacao = "Boa noite"

try {
    throw new Error ("Alguma coisa saiu errada")
} catch (error) {
    console.log("Erro: ", error)
} finally {
    console.log(saudacao, "Turma!")
}