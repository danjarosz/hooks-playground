import React, { useEffect, useReducer } from "react";
import NotesContext from "../context/notes-context";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      dispatch({
        type: "POPULATE_NOTES",
        notes: JSON.parse(notes),
      });
      // setNotes(JSON.parse(notesData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export default NoteApp;
