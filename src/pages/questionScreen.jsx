import Grid from "@material-ui/core/Grid";
import firebaseapp from "../firebase/firebaseConfig";
import LoginPlease from "../components/loginPlease";
import QuesBox from "../components/questionBox";
import { useState, useEffect } from "react";

const Question = () => {
  let [score, setScore] = useState(0);
  let ques = [1, 2, 3, 4, 5, 6];
  if (firebaseapp.auth.currentUser) {
    return (
      <>
        <h1 style={{ color: "#e84545", fontSize: "3.5em", marginTop: "0" }}>Questions</h1>
        <h4 style={{ fontSize: "1.5em" }}>
          {" "}
          {localStorage.getItem("displayName")}
        </h4>
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "2rem",
            marginTop: "0",
          }}
        >
          {ques.map((value) => (
            <QuesBox code={true} number={value} />
          ))}
        </div>
      </>
    );
  } else return <LoginPlease />;
};

export default Question;
