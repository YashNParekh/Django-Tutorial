import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("note deleted");
        else alert("Failed to delete");
        getNotes();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createNote = (id) => {
    api
      .post(`/api/notes/`, { content, title })
      .then((res) => {
        if (res.status === 201) alert("note created");
        else alert("Failed to create");
        getNotes();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="mainContainer" style={{ margin: "0 auto" }}>
      <h1> Notes </h1>

      {notes.map((note) => (
        <Note note={note} onDelete={deleteNote} key={note.id} />
      ))}
      <br />
      <br />

      <div> Create Note</div>

      <form onSubmit={createNote}>
        <div>
          <h2> Title</h2>
          <input
            className="title"
            type="text"
            name="title"
            id="title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <br />
        <div>
          <h2> Content</h2>
          <textarea
            name="content"
            id="content"
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Home;
