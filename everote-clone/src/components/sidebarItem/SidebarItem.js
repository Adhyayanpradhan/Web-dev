import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../../helper";

function SidebarItem(props) {
  const { index, note, classes, selectedNoteIndex } = props;
  console.log(props);

  const selectNote = (n, i) => {
    console.log(
      "---------------After clicking on the sidebarItem--------------"
    );
    console.log(n, i);
    console.log("props", props);
    props.selectNote(n, i);
  };
  const deleteNote = (_note) => {
    if (window.confirm(`Are you sure you want to delete: ${_note.title}`)) {
      props.deleteNote(_note);
    }
  };

  return (
    <div key={index}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => selectNote(note, index)}
        >
          <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
          />
        </div>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => deleteNote(note)}
        />
      </ListItem>
    </div>
  );
}

export default withStyles(styles)(SidebarItem);
