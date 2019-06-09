const fs = require('fs')

const getNotes = (notes) =>{
    return `Your notes is ${notes}`
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title 
    })
     if(duplicateNotes.length === 0){
          notes.push({title,body})
            saveNotes(notes)
            console.log('new notes added')
     }else{
         console.log('Note title taken')
     }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function(title) {
    const notes = loadNotes();
    const filterNotes = notes.filter(function(note){
        return note.title !== title
    })
    saveNotes(filterNotes);
}


const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(err){
        return []
    }
}

module.exports ={ getNotes, addNote, removeNote};