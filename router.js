const Router = require('koa-router');
const router = new Router();

// 路由中间件
router.use('/', (ctx, next) => {
  console.log('------------------------------');
  console.log(JSON.stringify(ctx.query));
  console.log(ctx.body);
  next();
});

// 引入api
router.use('/home', require('./src/api/home.js'));

module.exports = router;
