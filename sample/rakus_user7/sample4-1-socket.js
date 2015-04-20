//------------------------------------------------------
//  サンプルソース（sample4-1-socket.js）
//    socket.ioを利用してリアルタイム通信を行う
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

  // htmlファイルを読み込む
  data = fs.readFileSync('./sample4-2-socket.html');  // 相対パス指定時は実行ディレクトリからの相対パスとなる
  // レスポンスの出力
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

// io.socketsの処理
var io = require('socket.io').listen(server);

// 接続
io.sockets.on('connection', function (socket) {

  // event1イベントを送信（全クライアント）
  io.sockets.emit('event1','接続しました');
  
  // ################### START #####################
  // 
  // アジェンダに従ってソースを記述してみましょう。
  // 
  // ###################  END  #####################
});

// 接続を待ち受ける
server.listen(settings.port);
