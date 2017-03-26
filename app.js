/**
 * Created by Developer on 2017/3/22.
 */
const Koa = require('koa');
const router = require('./config/router');
const serve = require('koa-static');
const views = require('koa-nunjucks-next');


const app = new Koa();

app.use(serve(__dirname + '/public'));
app.use(views('./views'))

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);