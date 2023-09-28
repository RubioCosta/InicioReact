const express = require('express');
const  useRouter = require('./router/userRouter');

const app = express();
const port = 3500;

app.use('/api', useRouter);

app.get('/', (req, res) => {

    res.send({
        nome: "João",
        telefone: "47 99999-9999"
    });

});

app.listen(port, () => {
    console.log("server online!");
});