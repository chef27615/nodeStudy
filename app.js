const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes')

//customize yargs version

yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title', 
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//create listing command
yargs.command({
    command:'list',
    describe:'Lists all the notes',
    handler: function(){
        console.log(chalk.bold.inverse.blue('Listing all notes'))
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        console.log(chalk.inverse.bold.gray('Reading a note'))
    }
})

//add, remove, read, list

yargs.parse();
// console.log(yargs.argv);

