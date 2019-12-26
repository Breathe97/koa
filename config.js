// 主要的配置文件
module.exports = {
  host: {
    local: 'loaclhost', //服务器主机地址
    port: 3000, // 服务器端口号
    dbUrl: 'pryun.vip', // 数据库地址
    dbName: 'pryun' // 数据库名称
  },
  email: {
    user: '704340916@qq.com',
    smtp: 'xfyutqptbsglbbfa'
  },
  jwt: {
    Header: '', // 默认为HS256
    HeaderX: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', // 默认为HS256
    Delimiter: 'PR-yun', //处理jwt的分隔符
    Sign: '7777777Zp', // token签名
    vilidTime: 7 // token过期时间 (天)
  },
  swaggerOptions: {
    title: 'Swagger-PR云',
    version: '1.0.0',
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    securityDefinitions: {
      Bearer: {
        description: 'This is a PR云 server',
        type: 'apiKey',
        name: 'token',
        in: 'header'
      }
    },
    security: [{ Bearer: [] }],
    defaultSecurity: 'Bearer'
  },
  swaggerOptions2: {
    swaggerDefinition: {
      info: {
        description: 'This is a PR云 server',
        title: 'Swagger-PR云',
        version: '1.0.0'
      },
      host: 'localhost:3000',
      basePath: '',
      produces: ['application/json', 'application/xml'],
      schemes: ['http', 'https'],
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'headers',
          name: 'token',
          description: 'token'
        }
      }
    },
    basedir: __dirname, //app absolute path
    files: ['./src/routes/**/*.js'] //Path to the API handle folder
  }
};
