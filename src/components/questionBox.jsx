import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import functions from "../functions/index.min.js";
import "../css/questionBox.css";

const QuestionBox = (props) => {
  let [output, setOutput] = useState("");
  let [input, setInput] = useState("");
  const run = (data) => setOutput(functions[`ques${props.number}`](data));
  let inputMessage = [
    "Input a valid positive integer",
    "Input a valid integer positive integer below 10000000",
    "Input a comma separated set of integers. example: 1,2,3,4,5",
    "Input a string with only alphabets in lowercase",
    "Input a string with only alphabets",
    "Input a string with only alphabets",
  ];
  let hackerrank = [
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-1-63-1",
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-2-reversecoding",
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-3-reversecoding",
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-4-reversecoding",
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-5-reversecoding",
    "https://www.hackerrank.com/contests/reverse-coding-2021-1/challenges/question-6-reversecoding",
  ];
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#333333",
          color: "var(--text-color)",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          margin: "1rem",
          marginBottom: "0",
        }}
      >
        <h3>Question - {props.number}</h3>
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#333333",
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
            helperText={inputMessage[props.number - 1]}
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
            onClick={() => run(input.trim())}
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
              onClick={() => window.open(hackerrank[props.number - 1], "_blank")}
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
