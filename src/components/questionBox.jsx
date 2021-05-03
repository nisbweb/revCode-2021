import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import functions from "../functions";

const QuestionBox = (props) => {
  let [output, setOutput] = useState("");
  let [input, setInput] = useState("");
  const run = (data) => setOutput(functions[`ques${props.number}`](data));
  let history = useHistory();
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#424242",
          color: "var(--text-color)",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Question - {props.number}</h3>
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#424242",
            color: "var(--text-color)",
            padding: "0.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ width: "40%" }}>Enter Input</span>&nbsp;
          <TextField
            id="standard-basic"
            label="Input"
            color="secondary"
            variant="outlined"
            fullWidth
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                console.log(event.target);
                run(event.target.value);
              }
            }}
          />
        </div>
        <span
          style={{
            color: "var(--text-color)",
            padding: "0.5em",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            margin: 20,
            width: "50%",
          }}
        >
          <span>Ouput:</span>
          <span>{output}</span>
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "flex-end",
            margin: 20,
          }}
        >
          <Button
            style={{
              margin: 5,
            }}
            variant="text"
            color="inherit"
            onClick={() => run(input)}
          >
            Run
          </Button>
          {props.code && (
            <Button
              style={{
                margin: 10,
                backgroundColor: "var(--main-color)",
              }}
              variant="contained"
              color="inherit"
              onClick={() => history.push(`/codeScreen/${props.number}`)}
            >
              Code
            </Button>
          )}
        </div>
      </Paper>
    </>
  );
};

export default QuestionBox;
