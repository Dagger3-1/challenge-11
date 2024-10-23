const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const notesPath = path.join(__dirname, '../../../db/notes.json');

// Get all notes
router.get('/notes', (req, res) => {
  fs.readFile(notesPath, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Save a new note
router.post('/notes', (req, res) => {
  const newNote = req.body;

  fs.readFile(notesPath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(notesPath, JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json(notes);
    });
  });
});

module.exports = router;
