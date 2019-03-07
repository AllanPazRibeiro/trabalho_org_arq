
const fs = require('fs');



fs.readFile('assembly.txt', 'utf8', function(err, data) { 
  let lines = data.split('\n');

  for(let line = 0; line < lines.length; line++){
    let words = lines[line].split('\t');
      [words].reduce(function(result, item) {
        var branch = Object.keys(item)[0]; 
        var command = Object.keys(item)[1]; 
        var variables = Object.keys(item)[2]; 
        
        result[branch] = item[branch] != 'cls' ? item[branch] : '';
        result[command] = item[command] != '' ? item[command] : '';
        result[variables] = item[variables] != '' ? item[variables] : '';
        

      for (let i = 0; i < result[variables].length; i++){
        var variables_t = result[variables].split('\t') != 'LOOP' ? result[variables].split('\t')  : '';
      }
        console.log(variables_t);

        

        // console.log(result[branch]);
        // console.log(result[command]);
        // console.log(result[variables]);
      }, {});
    }
});

