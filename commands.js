var fs = require('fs');
var request = require('request')

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
  },
  sort: function(filename){
    doCallBack(filename,'sort');
  },
  wc: function(filename){
    doCallBack(filename,'wc');
  },
  uniq: function(filename){
    doCallBack(filename,'uniq');
  },
  curl: function(url){
    doCallBackURL(url,'curl');
  }
}

function doCallBack(filename, type){

  fs.readFile("./"+filename, function (err, data) {
      if (err) throw err;
    if(type === 'cat'){
     process.stdout.write(data + "\n");

    } else if (type === 'head') {
      process.stdout.write(data.toString().split("\n").slice(0,5).join("\n")+ "\n");
    } else if (type === 'tail') {
      process.stdout.write(data.toString().split("\n").slice(-5).join("\n")+ "\n");
    } else if (type === 'sort') {
      process.stdout.write(data.toString().split("\n").sort().join("\n")+ "\n");
    } else if (type === 'wc') {
      process.stdout.write(data.toString().split("\n").length.toString()+ "\n");
    } else if (type === 'uniq') {
      process.stdout.write(data.toString().split("\n").sort().filter(function(elem, index, self){
        return index == self.indexOf(elem)
      }).join("\n") + "\n");
    }
     process.stdout.write("prompt > ");
    });
  }

  function doCallBackURL(url){
    request(url, function (error, res, body){
      if(error) throw error;
      process.stdout.write(body + "\n")
    })
  }
