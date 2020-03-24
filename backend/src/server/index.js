const Express = require('express');

const app = Express();

app.get('/',(req, res) => {

    res.json({message: "executando na porta 3333"});
})

app.listen(3333);