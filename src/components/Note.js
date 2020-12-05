import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NoteContext);

  const position = useMousePosition();

  // useEffect(() => {
  //   console.log("Start effect");

  //   return () => {
  //     console.log("cleaning effect");
  //   };
  // }, []);

  const removeNote = (title) => {
    // const newNotes = notes.filter((note) => note.title !== title);
    dispatch({
      type: "REMOVE_NOTE",
      title,
    });
    // setNotes(newNotes);
  };

  return (
    <div>
      <h3>
        <p>
          Mouse position: x={position.x}, y={position.y}
        </p>
        <span>{note.title}</span>
        <button onClick={() => removeNote(note.title)}>remove</button>
      </h3>
      {note.body && <p>{note.body}</p>}
    </div>
  );
};

export default Note;
