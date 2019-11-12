var testFolder = "./data"; // ./는 현재 디렉토리를 뜻함
var fs = require("fs");

fs.readdir(testFolder, function(error, filelist) {
  console.log(filelist);
});
