const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
	.command(['create <filename [content]', 'c'], 'Creates a new file and write a passed content to it', {}, (argv) => {
		const filepath = path.resolve(argv.filename);
		const defaultContent = 'Default content';
		fs.writeFile(filepath, argv.content || defaultContent)
			.then(() => console.log('Your data has been saved succesfully'))
			.catch(e => console.error('An error has occured:', e));
	})
	.argv;