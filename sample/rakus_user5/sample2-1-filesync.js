//------------------------------------------------------
//  サンプルソース（sample2-1-filesync.js）
//    htmlファイルを読み込んで表示する
//------------------------------------------------------
var http = require('http');
var path = require('path');
var fs = require('fs');
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

  // htmlファイルを読み込む
  data = fs.readFileSync('./sample2-2-filesync.html');  // 相対パス指定時は実行ディレクトリからの相対パスとなる

  // レスポンスの出力
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

// 接続を待ち受ける
server.listen(settings.port);
