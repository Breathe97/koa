const Router = require('koa-router');
const home = new Router();
const nJwt = require('njwt');
const request = require('request')

// 将「微信对话开放平台」得到的信息填入
const APPID = 'KkUv9zeLcyRSRWq'
const TOKEN = 'xmyHRY5MVFTbUTV8zYdAotX9WMhswM'
const EncodingAESKey = '1Wu44vnNaMSG3Fv2BYITkCLtwUw675Dc76ZGGqEFYNX '
// /home
home.get('/', async (ctx, next) => {
  console.log(1);
  ctx.response.status = 200;
  ctx.response.body = 'home';
  await next();
});

// home/list
home.get('/list', async (ctx, next) => {
  // console.log(2);
  let claims = {
    "username": "zp",
    "msg": "你好"
  }
  let jwt = nJwt.create(claims, EncodingAESKey, "HS256");
  console.log(token)
  let token = jwt.compact();
  request.post('https://openai.weixin.qq.com/openapi/message/' + TOKEN, {
    json: {
      query: token
    }
  }, (error, res, body) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
    ctx.response.status = 200;
    ctx.response.body = body;
  })
  await next();
});
home.post('/pages', async (ctx, next) => {
  ctx.response.status = 200;

  let body = {};
  const model = Number(ctx.query.model); // 根据请求参数model返回不同的处理结果
  if (model === 1) {
    body = {
      model: 1
    };
  }
  if (model === 2) {
    body = {
      model: 2
    };
  }
  ctx.response.body = body;
  await next();
});

module.exports = home.routes();
