const Note = require('../models/noteModel');

const createNote = async (userId, title, content) => {
    return await Note.create({ userId, title, content });
};

const getNotes = async (userId) => {
    return await Note.find({ userId });
};

const updateNote = async (userId, id, title, content) => {
    const note = await Note.findOneAndUpdate(
        { _id: id, userId },
        { title, content },
        { new: true }
    );
    if (!note) throw new Error('Nota no encontrada');
    return note;
};

const deleteNote = async (userId, id) => {
    const note = await Note.findOneAndDelete({ _id: id, userId });
    if (!note) throw new Error('Nota no encontrada');
    return { message: 'Nota eliminada correctamente' };
};

module.exports = { createNote, getNotes, updateNote, deleteNote };
