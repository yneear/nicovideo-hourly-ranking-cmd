require('colorful').toxic();
var request = require('request');

var URL =  {
  vocaloid: 'getVocaloid',
  singer: 'getSinger',
  player: 'getPlayer',
  root: 'http://45.33.46.30:5408/'
};

var print = function (data) {
  console.log();
  for (var i = 0; i < data.length; i++) {
    var detail = data[i];
    var nickname = detail.userNickname ? detail.userNickname : 'anonymity';
    console.log( '  ' + String(detail.rankingId).yellow + '. '.yellow + nickname.blue + ' --- ' + detail.title.cyan);
    console.log( '  upTime: ' + detail.upTime + '  url: '.grey + detail.watchUrl.gray );
    console.log();
  }
};

exports.fetch = function(type) {
  if (!URL[type]) console.log('  !!!'.red + '  no this type.');

  request.get(URL.root + URL[type], function (err, res, data) {
    if (!err && res.statusCode == 200) {
      print(JSON.parse(data));
    }
  });
};

exports.help = function() {
  console.log();
  console.log('  help:');
  console.log('  $'.cyan + ' nicohr vocaloid' + '  ---  fetch the vocaloid hourly ranking data.' );
  console.log('  $'.cyan + ' nicohr singer' + '  ---  fetch the singer hourly ranking data.' );
  console.log('  $'.cyan + ' nicohr player' + '  ---  fetch the player hourly ranking data.' );
};
