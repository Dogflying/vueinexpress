const express = require('express')
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

const indexRouter = require('./routers/index');
const userRouter = require('./routers/user');
const courseRouter = require('./routers/course');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/course', courseRouter);


var server = http.createServer(app);
server.listen(3000, "127.0.0.1");
