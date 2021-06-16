import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/SidebarItem";

function Sidebar(props) {
  const [state, setstate] = useState({ addingNote: false, title: null });

  const { notes, classes, selectedNoteIndex } = props;
  console.log("notes and selectedNoteIndex", notes, selectedNoteIndex);
  //console.log(props);

  const newNoteBtnClick = () => {
    console.log("New Button clicked");
    setstate({ addingNote: !state.addingNote, title: null });
  };

  const updateTitle = (txt) => {
    state.title = txt;
  };

  const newNoteHandler = () => {
    console.log(state);
  };

  let selectNote = (n, i) => {
    console.log("------from sidebarItem-> sidebar---------");
    console.log(n, i);
    props.selectNote(n, i);
  };

  const deleteNote = () => {
    console.log("note deleted");
  };

  console.log("notes", notes);

  if (notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button className={classes.newNoteBtn} onClick={newNoteBtnClick}>
          {state.addingNote ? "Cancel" : "Add Note"}
        </Button>
        {state.addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="enter note title"
              onKeyUp={(e) => updateTitle(e.target.value)}
            />
            <Button
              className={classes.newNoteSubmitBtn}
              onClick={newNoteHandler}
            >
              Submit
            </Button>
          </div>
        ) : (
          ""
        )}

        <List>
          {notes.map((note, index) => {
            return (
              <div key={index}>
                {console.log(note)}
                <SidebarItem
                  note={note}
                  index={index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={selectNote}
                  deleteNote={deleteNote}
                />
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div>Hello problem is there is no note</div>;
  }
}

export default withStyles(styles)(Sidebar);
