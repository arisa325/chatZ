//------------------------------------------------------
//  サンプルソース（sample1-hello.js）
//    ブラウザに文字列を表示する
//------------------------------------------------------
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

// サーバオブジェクトを生成する
var server = http.createServer();

// requestイベントの割り当て
server.on('request', function(request, response) {
  // ログ出力
  console.log('request!!');

  // レスポンスの出力
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // ################### START #####################
  // ('')の中の文字列を書き換えてみましょう。
  response.end('hello sample!!');
  // ###################  END  #####################
});

// 接続を待ち受ける
server.listen(settings.port);
