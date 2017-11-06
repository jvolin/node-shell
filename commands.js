var fs = require('fs');

module.exports = {
  pwd:function() {
    //if (cmd === 'pwd'){ // handle pwd
      process.stdout.write(process.cwd());
    //}
  },
  date:function() {
    var newDate = new Date();
    process.stdout.write(newDate.toString());
  },
  ls:function() {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo:function(theString){
    process.stdout.write(theString);
  },
  cat:function(filename){
    doCallBack(filename);
  }
}

function doCallBack(filename){
  fs.readFile("./"+filename),function (err,data){
    if (err) throw err;
    console.log(data);
    process.stdout.write(data + "\n");
    process.stdout.write("prompt > ");
  }
}
