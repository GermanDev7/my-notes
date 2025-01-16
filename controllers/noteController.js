const { createNote, getNotes, updateNote, deleteNote } = require('../services/noteService');
const { createNoteSchema, updateNoteSchema } = require('../validators/noteValidator');

const create = async (req, res) => {
    try {
        // Validar datos de entrada
        const { error } = createNoteSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { title, content } = req.body;
        const note = await createNote(req.user.id, title, content);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const notes = await getNotes(req.user.id);
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        // Validar datos de entrada
        const { error } = updateNoteSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { id } = req.params;
        const { title, content } = req.body;
        const note = await updateNote(req.user.id, id, title, content);
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteNote(req.user.id, id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { create, getAll, update, remove };
