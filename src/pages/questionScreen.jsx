import Grid from "@material-ui/core/Grid";
import firebaseapp from "../firebase/firebaseConfig";
import LoginPlease from "../components/loginPlease";
import QuesBox from "../components/questionBox";
import { useState, useEffect } from "react";

const Question = () => {
  let [level, setLevel] = useState(1);
  let [score, setScore] = useState(0);
  let [ques, setQues] = useState([1, 2, 3]);
  useEffect(() => {
    firebaseapp.db
      .collection("users")
      .doc(localStorage.getItem("uid"))
      .onSnapshot((doc) => {
        setLevel(doc.data().level);
        setScore(doc.data().score);
        if (doc.data().level === 1) setQues([1, 2, 3]);
        else if (doc.data().level === 2) setQues([4, 5]);
        else if (doc.data().level === 3) setQues([5]);
      });
  }, []);
  if (firebaseapp.auth.currentUser) {
    return (
      <>
        <br />
        <br />
        <h1 style={{ color: "#e84545", fontSize: "3.5em" }}>
          Questions : Level - {level}
        </h1>
        <br />
        <h4 style={{ fontSize: "1.5em" }}>
          {" "}
          {localStorage.getItem("displayName")} | Score: {score}
        </h4>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "40vh",
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={2}
            container
          >
            {ques.map((value) => (
              <Grid key={value} item xs={3}>
                <QuesBox code={true} number={value} />
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  } else return <LoginPlease />;
};

export default Question;
