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

  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});
