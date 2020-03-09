function pwd(){

    process.stdout.write('prompt > ');
    // process.stdout.write(`Current Directory: ${process.cwd()}`);

    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();

        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
        process.stdout.write(`Current Directory: ${process.cwd()}`);
        process.stdout.write('\nprompt > ');
    });
};
module.exports = {
    pwd
};