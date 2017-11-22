#!/usr/bin/env node
const chalk = require('chalk');
const commander = require('commander');
const helpers = require('./helpers');

let targetValue;

commander
    .arguments('<targetDir>')
    .option('-r --addreact', 'Add React Support')
    .option('-s --addserver', 'Connect nodejs server')
    .action(targetDir => {
        targetValue = targetDir;
    })
    .parse(process.argv);

if (!targetValue) {
    commander.help(txt => chalk.red.bold(txt));
}

helpers.setDirectory(targetValue);
helpers.setBoilerplateFiles(targetValue);

if (commander.addserver) {
    helpers.setServer(targetValue);
}

if (commander.addreact) {
    helpers.setReact(targetValue);
}

console.log('');
console.log(
    chalk`      frontendius-cli generated {bold.hex('#FF78C5') ${targetValue}}.`
);
console.log('');
console.log(chalk`      To get started:`);
console.log('');
console.log(chalk`       {bold.hex('#7CE9FB') cd ${targetValue} }`);
console.log(
    chalk`       {bold.hex('#7CE9FB') yarn install (install client-side dependencies) }`
);
console.log(chalk`       {bold.hex('#7CE9FB') cd ${targetValue}/server }`);
console.log(
    chalk`       {bold.hex('#7CE9FB') yarn install (install server-side dependencies) }`
);
console.log('');
console.log(
    chalk`       More details: https://www.npmjs.com/package/frontendious-cli#build-setup`
);
console.log('');
