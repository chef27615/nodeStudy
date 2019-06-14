const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return `Your notes is...`
}

const readNotes = title => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    note ? console.log(chalk.inverse(note.title), note.body) : console.log(chalk.inverse.red('no note find')) 
}


const addNote = (title,body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title == title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({title,body})
        saveNotes(notes)
        console.log(chalk.green.inverse('new notes added'))
         }else{ console.log(chalk.red.inverse('Note title taken'))}
}


// const addNote = function(title, body){
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function(note){
//         return note.title === title 
//     })
//      if(duplicateNotes.length === 0){
//           notes.push({title,body})
//             saveNotes(notes)
//             console.log(chalk.green.inverse('new notes added'))
//      }else{
//          console.log(chalk.red.inverse('Note title taken'))
//      }
// }

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const saveNotes = function(notes){
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

const removeNote = title => {
    const notes = loadNotes();
    const filterNotes = notes.filter(note => note.title !== title)
    if (notes.length > filterNotes.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(filterNotes);
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.yellow.bold(`your notes`))
    notes.forEach(note => console.log(note.title))
}


// const removeNote = function(title) {
//     const notes = loadNotes();
//     const filterNotes = notes.filter(function(note){
//         return note.title !== title
//     })

//     if (notes.length > filterNotes.length){
//         console.log(chalk.green.inverse('Note removed'))
//         saveNotes(filterNotes);
//     } else {
//         console.log(chalk.red.inverse('No note found'))
//     }
// }

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(error){
        return []
    }
}

// const loadNotes = function(){
//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     }catch(err){
//         return []
//     }
// }

module.exports ={ getNotes, addNote, removeNote, listNotes, readNotes};