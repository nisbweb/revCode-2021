import "../css/instructions.css";
import firebaseapp from "../firebase/firebaseConfig";
import Lottie from "react-lottie";
import animDataD from "../assets/JSON/rules.json";
import { Button } from "@material-ui/core";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoginPlease from "../components/loginPlease";
import { useHistory } from "react-router-dom";

const Instructions = () => {
  const [active, setActive] = useState(false);
  let points = [
    "We will be leveraging the HackerRank platform to conduct this event",
    'The link to access the competition on <a href="https://www.hackerrank.com/reverse-coding-2021-1" target="_blank">HackerRank</a>',
    "You can login and attempt only on 18th May 2021 between 5:30 PM – 7:30 PM IST.",
    "The competition duration is 120 minutes.",
    "This is a fun event which is for 500 marks having 6 programming questions.<ul><li>Question No. 1,2,3 -50 marks</li><li>Question No. 4,5- 100 marks</li><li>Question No. 6 -150 marks .</li></ul>",
    "Your task is to use the input output pairs you find ,to deduce the logic and then replicate the same in the hackerrank contest questions.",
    "Please use any programming language of your choice.",
    "Please ensure strong internet connectivity at your end.",
    "Please give this competition continuously in one go. Do not try copying/cheating/plagiarism and any attempt to do so will result in disqualification.",
    "We wish you the best of luck in the competition, but most importantly, we hope you have fun :)",
  ];
  useEffect(() => {
    firebaseapp.db
      .collection("admin")
      .doc("12TPtgbOQJQwjnh8ViNw")
      .onSnapshot((data) => {
        setActive(data.data().start);
      });
  }, []);
  const history = useHistory();
  if (firebaseapp.auth.currentUser) {
    let insOptions = {
      loop: true,
      autoplay: true,
      animationData: animDataD,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    let styles = {
      width: "60%",
      backgroundColor: "#424242",
      padding: "2em",
    };
    return (
      <div className="div">
        <h3 className="h3">Instructions</h3>
        <Paper style={styles} elevation={0}>
          <Grid container spacing={0}>
            <Grid className="flex" xs={3} item>
              <Lottie options={insOptions} width={300} height={300} />
            </Grid>
            <Grid xs={9} item>
              <ul>
                {points.map((value, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: value,
                    }}
                  ></li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Paper>
        <Button
          onClick={() => history.push("/game")}
          style={{
            backgroundColor: "var(--main-color)",
            color: "white",
            width: "15em",
            marginTop: "2rem",
          }}
          variant="text"
          disabled={!active}
        >
          {!active && (
            <UseAnimations animation={infinity} strokeColor="white" />
          )}
          {active && <span>Start</span>}
        </Button>
      </div>
    );
  } else return <LoginPlease />;
};

export default Instructions;
