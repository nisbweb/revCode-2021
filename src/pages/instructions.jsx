import "../css/instructions.css";
import firebaseapp from "../firebase/firebaseConfig";
import Lottie from "react-lottie";
import animData from "../assets/JSON/login.json";
import animDataD from "../assets/JSON/rules.json";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import infinity from "react-useanimations/lib/infinity";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Instructions = () => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  useEffect(() => {
    firebaseapp.db
      .collection("admin")
      .doc("12TPtgbOQJQwjnh8ViNw")
      .onSnapshot((data) => {
        setActive(data.data().start);
      });
  }, []);
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
      padding: "2em"
    };
    return (
      <div className="div">
        <h3>Instructions</h3>
        <Paper style={styles} elevation={0}>
          <Grid container spacing={0}>
            <Grid className="flex" xs={3} item>
              <Lottie options={insOptions} width={300} height={300} />
            </Grid>
            <Grid xs={9} item>
              <ul>
                {[1, 2, 3, 4, 5].map((value) => (
                  <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis temporibus rerum officiis ad, in magni?
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Paper>
        <Button
          onClick={() => history.goBack()}
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
  } else {
    const errOptions = {
      loop: true,
      autoplay: true,
      animationData: animData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div className="auth-warp">
        <h3>this page is locked please login to continue</h3>
        <Lottie options={errOptions} width={300} height={300} />
        <Button
          onClick={() => history.goBack()}
          style={{
            backgroundColor: "var(--main-color)",
            color: "white",
            width: "15em",
            marginTop: "2rem",
          }}
          variant="contained"
        >
          <UseAnimations animation={alertTriangle} strokeColor="white" />
          &nbsp;&nbsp;&nbsp; Go back
        </Button>
      </div>
    );
  }
};

export default Instructions;
