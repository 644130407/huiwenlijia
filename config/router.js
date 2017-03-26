/**
 * Created by Developer on 2017/3/22.
 */
const router = require('koa-router')();

router.get('/', async(ctx, next)=>{
    await ctx.render('index');
    })
    .get('/jiejue', async(ctx, next)=>{
    await ctx.render('jiejue');
    })
    .get('/fuwu', async(ctx, next)=>{
    await ctx.render('fuwu');
    })
    .get('/hulianwang', async(ctx, next)=>{
    await ctx.render('hulianwang');
    })
    .get('/hangye', async(ctx, next)=> {
        await ctx.render('hangye');
    })
    .get('/jianjie', async(ctx, next)=> {
        await ctx.render('jianjie', {jianjie: "active"});
    })
    .get('/fazhan', async(ctx, next)=> {
        await ctx.render('fazhan', {fazhan: "active"});
    })
    .get('/guanli', async(ctx, next)=> {
        await ctx.render('guanli', {guanli: "active"});
    })
    .get('/zeren', async(ctx, next)=> {
        await ctx.render('zeren', {zeren: "active"});
    })
    .get('/shengtai', async(ctx, next)=> {
        await ctx.render('shengtai', {shengtai: "active"});
    })
    .get('/gongsi', async(ctx, next)=> {
        await ctx.render('gongsi', {gongsi: "active"});
    })
    .get('/shichang', async(ctx, next)=> {
        await ctx.render('shichang', {shichang: "active"});
    })
    .get('/xiaoqi', async(ctx, next)=> {
        await ctx.render('xiaoqi', {xiaoqi: "active"});
    })
    .get('/dongtai', async(ctx, next)=> {
        await ctx.render('dongtai', {dongtai: "active"});
    })
    .get('/jinrong', async(ctx, next)=> {
        await ctx.render('jinrong', {jinrong: "active"});
    })
    .get('/zhihui', async(ctx, next)=> {
        await ctx.render('zhihui', {zhihui: "active"});
    })
    .get('/dianxin', async(ctx, next)=> {
        await ctx.render('dianxin', {dianxin: "active"});
    })
    .get('/qita', async(ctx, next)=> {
        await ctx.render('qita', {qita: "active"});
    })
    .get('/hulianwangfuwu', async(ctx, next)=> {
        await ctx.render('hulianwangfuwu', {hulianwangfuwu: "active"});
    })
    .get('/zixun', async(ctx, next)=> {
        await ctx.render('zixun', {zixun: "active"});
    })
    .get('/jishu', async(ctx, next)=> {
        await ctx.render('jishu', {jishu: "active"});
    })
    .get('/qita2', async(ctx, next)=> {
        await ctx.render('qita2', {qita2: "active"});
    })
module.exports = router;