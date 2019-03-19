const fs = require('fs');
const ParseArquivo = () => {
	fs.readFile('assembly.txt', 'utf8', function(err, data) { 
	let lines = data.split('\n');
	var linesObj = [];
	lines.map(line => {
		line = line.replace(/\r/g, '');
		let regexp = /^(?:(?:(\w+)\:\t)|(?:\t\t))(\w{1,4})\t((?:\$\w+)|(?:\w+)|(?:\d))(?:\,((?:\$\w+)|(?:\w+)|(?:\d)))?(?:\,((?:\$\w+)|(?:\w+)|(?:\d)))?$/;
		let matches = regexp.exec(line);
		linesObj.push({
			linesItSelf : line,
			branch: matches ? matches[1] : '',  
			inst: matches ? matches[2] : '',
			parameters: matches ? matches.slice(3) : ''
		})
		
	});

	for(linesIndex in linesObj) {
		intersection(linesObj[linesIndex], linesObj[parseInt(linesIndex) + 1], linesObj[parseInt(linesIndex) + 2]);
	}

	});
}
ParseArquivo();

var intersection = (line1, line2, line3) => {
	if(line2) {

		for(let parameter of line2.parameters) {
			if(line1.inst == 'ADD' || line1.inst == 'SUB' || line1.inst == 'ADDI'){

				if(line1.parameters[0] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);

			} else if(line1.inst == 'SW' || line1.inst == 'LW') {

				if(line1.parameters[1] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);

				if(line1.parameters[2] == parameter)
					console.log(line1.inst + ' tem conflito com ' + line2.inst);
				
			}	
		}
	}
	if(line3) {
		for(let parameter2 of line3.parameters) {
			if(line1.inst == 'ADD' || line1.inst == 'SUB' || line1.inst == 'ADDI'){

				if(line1.parameters[0] == parameter2)
				console.log(line1.inst + ' tem conflito com ' + line3.inst);

			} else if(line1.inst == 'SW' || line1.inst == 'LW'){
				
				if(line1.parameters[1] == parameter2)
				console.log(line1.inst + ' tem conflito com ' + line3.inst);

				if(line1.parameters[2] == parameter2)
					console.log(line1.inst + ' tem conflito com ' + line3.inst);
			}
		}
	}

}


