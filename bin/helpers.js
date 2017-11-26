const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const chalk = require('chalk');
const ora = require('ora');
const shell = require('shelljs');

let oraInstance;

class Helpers {
    constructor() {}

    successMsg(msg, targetDir = '') {
        oraInstance = ora(chalk` {green.bold ${msg} }`).start();
    }

    infoMsg(msg, targetDir = '') {
        oraInstance = ora(chalk` {blue.bold ${msg} }`).start();
    }

    setDirectory(targetDir) {
        if (!fs.existsSync(`${targetDir}`)) {
            this.successMsg('Creating directory', targetDir);
            shell.exec(`mkdir ${targetDir}`);
            oraInstance.succeed();
        } else {
            this.infoMsg('Directory already exists', targetDir);
            oraInstance.succeed();
        }
    }

    setBoilerplateFiles(targetDir) {
        shell.exec(`cp -R ${__dirname}/boilerplate/. ${targetDir}/`);
    }

    setServer(targetDir) {
        if (!fs.existsSync(`${targetDir}/server`)) {
            this.successMsg('Adding server...');
            shell.exec(`mkdir ${targetDir}/server`);
            shell.exec(`cp -R ${__dirname}/server/. ${targetDir}/server/`);

            fs
                .readFileAsync(`${targetDir}/server/webpack.dev.js`, 'utf-8')
                .then(content => {
                    shell.exec(
                        `echo "${content}" > ${targetDir}/webpack.dev.js`
                    );
                    shell.exec(`rm -rf ${targetDir}/server/webpack.dev.js`);
                });

            oraInstance.succeed();
        }
    }

    setReact(targetDir) {
        this.successMsg('Adding react...');

        shell.exec(`rm -rf ${targetDir}/package.json`);
        shell.exec(`rm -rf ${targetDir}/.babelrc`);
        shell.exec(`rm -rf ${targetDir}/src/js/app.js`);
        shell.exec(`rm -rf ${targetDir}/src/index.html`);
        shell.exec(`rm -rf ${targetDir}/webpack.common.js`);

        shell.exec(`cp ${__dirname}/react/package.json ${targetDir}/`);
        shell.exec(`cp ${__dirname}/react/.babelrc ${targetDir}/`);
        shell.exec(`cp ${__dirname}/react/webpack.common.js ${targetDir}/`);
        shell.exec(`cp ${__dirname}/react/app.js ${targetDir}/src/js/`);
        shell.exec(`cp ${__dirname}/react/index.html ${targetDir}/src/`);

        oraInstance.succeed();
    }
}

const helpers = new Helpers();

module.exports = {
    setDirectory: helpers.setDirectory,
    setBoilerplateFiles: helpers.setBoilerplateFiles,
    setServer: helpers.setServer,
    setReact: helpers.setReact,
    successMsg: helpers.successMsg,
    infoMsg: helpers.infoMsg
};
