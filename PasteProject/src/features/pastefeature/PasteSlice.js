import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : []
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    createNote: (state, action) => {
      const newNotes = action.payload;
      state.notes.push(newNotes);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },


    updateNote: (state, action) => {
      const updatedNote = action.payload;

      state.notes = state.notes.map((note) =>
        note._id === updatedNote._id
          ? updatedNote
          : note
      );

      localStorage.setItem(
        "notes",
        JSON.stringify(state.notes)
      );
    },


    deleteNote: (state, action) => {
      const noteId = action.payload;

      state.notes = state.notes.filter(
        (item) => item._id !== noteId
      );

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },


    resetNote: (state) => {
      state.notes = [];

      localStorage.removeItem("notes");
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNote, updateNote, deleteNote, resetNote } = noteSlice.actions

export default noteSlice.reducer