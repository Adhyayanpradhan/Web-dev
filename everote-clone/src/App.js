import "./App.css";
import { useState, useEffect } from "react";
import { firebase } from "@firebase/app";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./components/editor/Editor";

function App() {
  const [noteState, setNoteState] = useState({
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null,
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((item) => {
          const data = item.data();
          data["id"] = item.id;
          return data;
        });
        //console.log(notes);
        setNoteState({ notes: notes });
      });
  }, []);
  const selectNote = (note, index) => {
    console.log("-----from sidebarItem-> sidebar-> app.js---------");
    console.log(note, index);
    setNoteState({
      selectedNoteIndex: index,
      selectedNote: note,
    });
  };
  console.log(noteState.selectedNoteIndex, noteState.notes);
  return (
    <div className="app-container">
      {console.log(
        "XXXXXXXXXXXXXXXXXXXXXXXA",
        noteState,
        noteState.selectedNoteIndex,
        noteState.notes
      )}
      <Sidebar
        selectedNoteIndex={noteState.selectedNoteIndex}
        notes={noteState.notes}
        selectNote={selectNote}
      />
      {console.log(
        "WOWWWWWWWWWWWWWWWWWWWWWW",
        noteState.selectedNoteIndex,
        noteState.notes
      )}
      {noteState.selectedNote ? (
        <Editor
          selectedNote={noteState.selectedNote}
          selectedNoteIndex={noteState.selectedNoteIndex}
          notes={noteState.notes}
        />
      ) : null}
    </div>
  );
}

export default App;
