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
                {[1, 2, 3, 4, 5].map((value) => (
                  <li key={value}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis temporibus rerum officiis ad, in magni?
                  </li>
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
