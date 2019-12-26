const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
  const host = config.host;
  mongoose.connect(`mongodb://${host.dbUrl}/{${host.dbName}`, {
    useNewUrlParser: true
  });
  // 链接数据库
  let db = mongoose.connection; // 数据库对象
  db.on('error', console.error.bind(console, '数据库连接失败!'));
  db.once('open', () => {
    console.log('数据库连接成功!');
  });
};
