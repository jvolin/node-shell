var fs = require('fs');

module.exports = {
  pwd: function() {
    //if (cmd === 'pwd'){ // handle pwd
      process.stdout.write(process.cwd());
    //}
  },
  date: function() {
    var newDate = new Date();
    process.stdout.write(newDate.toString());
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo: function(theString){
    process.stdout.write(theString);
  },
  cat: function(filename){
    doCallBack(filename,'cat');
  },
  head: function(filename){
    doCallBack(filename,'head');
  },
  tail: function(filename){
    doCallBack(filename,'tail');
  }
}

function doCallBack(filename, type){

  fs.readFile("./"+filename, function (err, data){
      if (err) throw err;
    if(type === 'cat'){
     process.stdout.write(data + "\n");

    } else if (type === 'head'){
      process.stdout.write(data.toString().split("\n").slice(0,5).join("\n"));
    } else if (type === 'tail'){
      process.stdout.write(data.toString().split("\n").slice(-5).join("\n"));
    }
     process.stdout.write("prompt > ");
    });
  }
