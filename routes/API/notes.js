const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// GET all notes
router.get('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));
    res.json(notes);
});

// POST new note
router.post('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes));
    res.json(newNote);
});

// DELETE note
router.delete('/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8'));
    const filteredNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(filteredNotes));
    res.json({ message: 'Note deleted successfully' });
});

module.exports = router;