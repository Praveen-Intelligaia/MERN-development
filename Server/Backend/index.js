const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors')
const app = new Koa();





require('dotenv').config();
app.use(koaBody({ multipart: true }))
app.use(cors());
require('./src/bootstrap');
const port =5000;
require('./src/router')(app, Router);

app.listen(port, () => { console.log(`listen to port ` + port) });