const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!')
});

// app.get('/novarota', (req, res) => {
//     res.send('Nova rota criada.')
// });

// app.get('/consulta-cep/:cep', async (req, res) => {
//     const cep = req.params.cep;

//     try {
//         const.response = await axios.get('http://viacep.com.br/')
//         res.json(response)
//     }
// });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});