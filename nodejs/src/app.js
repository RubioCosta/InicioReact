const express = require('express');
const useRouter = require('./router/userRouter');
const authRouter = require('./router/authRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3500;

app.use(bodyParser.json());

app.use('/api', useRouter);
app.use('/api', authRouter);

//app.use(cors);

app.listen(port, () => {
    console.log("server online!");
});