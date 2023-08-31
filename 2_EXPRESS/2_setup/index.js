const express = reequire('express')
const app = express()

app.get('/',(requisicao, resposta) => {
    resposta.send("Estou ut8ilizando o Express!")
})