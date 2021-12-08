import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

function NotePage({ match, history }) {
  console.log(match);
  const noteId = match.params.id;
  const [note, setNote] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application-json",
      },
    });
    history.push("/");
  };

  const handleSubmit = () => {
    updateNote();
    history.push("/");
  };

  useEffect(() => {
    getNotes();
  }, [noteId]);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={deleteNote}>Delete</button>
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
}

export default NotePage;
