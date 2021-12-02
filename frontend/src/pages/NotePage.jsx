import React, { useState, useEffect } from "react";

function NotePage({ match }) {
  console.log(match);
  const noteId = 1;
  const [note, setNote] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`/api/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    getNotes();
  }, [noteId]);

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
}

export default NotePage;
