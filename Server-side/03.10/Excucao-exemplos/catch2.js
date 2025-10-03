import fetch from "node-fetch"
const obterUsuarios = async () => {
    try {
        const res = await fetch("https://reqres.in/api/uses?page=2")
        if (res.status !== 200) throw new Error("Erro: Há algo de errado com a URL")
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error.message)
        } finally {
            console.log("try catch com async-await em Node.js")
        }
}
obterUsuarios()