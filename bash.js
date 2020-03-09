// const pwd = require('./pwd');

// pwd.pwd()
const fs = require('fs')
const ls = require('./ls')

// ls()

console.log(fs.readFile('./pwd.js', 'utf8', (err, data) => {
	if (err) {
		throw err
	}
	console.log(data)
}))