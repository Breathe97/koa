const Koa = require('koa');
const app = new Koa();
const config = require('./config');

const router = require('./router');
const db = require('./db.js');

app.use(router.routes()); // 使用路由

// db(); // 连接数据库

const port = config.host.port; // 端口
app.listen(port, () => {
  console.log(
    `Your server is listening on port ${port}( http://localhost:${port} )`
  );
  console.log(
    `Your swagger-ui is listening on port ${port} ( http://localhost:${port}/api-docs )`
  );
});
