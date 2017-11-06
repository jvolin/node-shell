var commands = require("./commands");


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(" "); // remove the newline


  if (cmd[0] === 'pwd'){
    commands['pwd']();
  }

  if (cmd[0] === 'date') { // handle date
    commands['date']();
  }

  if (cmd[0] === 'ls'){
    commands['ls']();
  }

  if (cmd[0] === 'echo'){
    var inputString = cmd.slice(1).join(' ');
    commands['echo'](inputString);
  }

  if (cmd[0] === 'cat'){
    var filename = cmd[1];
    commands['cat'](filename);
  }

  if (cmd[0] === 'head'){
    var filename = cmd[1];
    commands['head'](filename);
  }

  if (cmd[0] === 'tail'){
    var filename = cmd[1];
    commands['tail'](filename);
  }

  if (cmd[0] === 'sort'){
    var filename = cmd[1];
    commands['sort'](filename);
  }

  if (cmd[0] === 'wc'){
    var filename = cmd[1];
    commands['wc'](filename);
  }

  if (cmd[0] === 'uniq'){
    var filename = cmd[1];
    commands['uniq'](filename);
  }

  if (cmd[0] === 'curl'){
    var filename = cmd[1];
    commands['curl'](filename);
  }
  //process.stdout.write('You typed: ' + cmd);
 // process.stdout.write('\nprompt > ');

});
