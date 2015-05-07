//------------------------------------------------------
//  サンプルソース（sample3-1-dynamnic.js）
//    ejsを利用して動的に値を変更する
//------------------------------------------------------
var http = require('http');
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

// サーバオブジェクトを生成する
var server = http.createServer(onRequest);

// サーバオブジェクトを外部ファイルへエクスポートする
module.exports.server = server;

var query;

// requestイベントの割り当て
function onRequest(req, res) {
  // ログ出力
  console.log('onRequest!!');

  // ################### START #####################
  ejsData = fs.readFileSync('./sample3-2-dynamic.ejs', 'UTF-8');
  var str = 'あいうえお';
  data = ejs.render(ejsData, {label : str});
  // ###################  END  #####################

  // レスポンスの出力
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

// 接続を待ち受ける
server.listen(settings.port);
