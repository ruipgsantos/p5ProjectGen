#!/usr/bin/env node
const { execSync } = require('child_process');
const { program } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const copy = require('recursive-copy');

const optionsEnum = {
    create: 'create',
}

program
    .option('--create', 'create a new p5 project')

program.parse();

const options = program.opts();
console.log(options);

processOptions(options);

async function processOptions(options) {
    switch (true) {

        case options[optionsEnum.create]:
            console.log('Creating Project')
            try {
                const answers = await inquirer.prompt({
                    type: 'input',
                    name: 'projectName',
                    message: 'What is your project name?'
                })

                console.log(`Creating project structure in ${answers.projectName}`)
                const userdir = process.cwd();
                const projectdir = `${userdir}/${answers.projectName}`;
                const scriptdir = __dirname;

                console.log(userdir);
                console.log(projectdir);
                console.log(scriptdir);

                if (!fs.existsSync(projectdir)) {
                    fs.mkdirSync(projectdir);

                    try {
                        fs.cpSync(`${scriptdir}/project_files`, `${projectdir}`, { recursive: true });

                        execSync('npm install', { cwd: projectdir, stdio: 'inherit' });
                    } catch (e) {
                        console.error('There\'s been an error', e);
                    }
                } else {
                    console.error('Directory already exists');
                }

            } catch (e) {
                console.error(e);
            }
            break;

        case "":
            console.log('You must provide an option')
            break;

        default:
            console.log("Argument not recognized")
    }
}

