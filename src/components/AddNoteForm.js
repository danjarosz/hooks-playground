import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      // setNotes([...notes, { title: title.trim(), body: body.trim() }]);
      dispatch({
        type: "ADD_NOTE",
        note: { title: title.trim(), body: body.trim() },
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
