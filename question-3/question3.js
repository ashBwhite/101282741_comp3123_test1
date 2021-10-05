import fs from 'fs';

if(!fs.existsSync("logs")){
  fs.mkdirSync("logs")
}

process.chdir("logs");

for(let i=0; i<10; i++){
  const files = `log${i}.txt`
  fs.writeFile(filesName, 'text', (error) => {
    if(error) {
      throw error;
    }
  });
  console.log(filesName);
}

import path from 'path';
if(!fs.existsSync("logs")) {
  fs.readdir("logs", (error, files) => {
    if(error) throw error;
    for (const file of files){
      const filePath = path.join("logs", file);
      fs.unlink(filePath, error => {
        if(error) throw error;
      });
      console.log(`Delete files:${file}`);
    }
    fs.rmdirSync("logs");
  });
}