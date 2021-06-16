import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import debounce from "../../helper";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";

function Editor(props) {
  const [editorState, setEditorState] = useState({
    text: "",
    title: "",
    id: "",
  });
  const { classes } = props;
  console.log(props);
  const updateBody = async (val) => {
    await setEditorState({ text: val });

    update();
  };

  const update = debounce(() => {
    console.log("hello");
  }, 1000);

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={editorState.text} onChange={updateBody} />
    </div>
  );
}

export default withStyles(styles)(Editor);
