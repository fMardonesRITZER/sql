const express = require('express')
const app = express();
const port = 3000;
const movieRouter = require ('./router/movies');


app.use('/', movieRouter);
app.set( "view engine", "ejs" );




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})