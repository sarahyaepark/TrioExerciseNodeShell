const request = require('request');
process.stdout.write('prompt > ');

function curl() {

	process.stdin.on('data', (data) => {
		const website = data.toString();
		request(website, function(error,response,body){
			console.error('error:', error);
			console.log('statusCode:', response && response.statusCode);
			console.log('body:', body);
		})
	})

}

curl();