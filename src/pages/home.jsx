import "../css/home.css";
import Lottie from "react-lottie";
import animData from "../assets/JSON/code.json";
import { Button } from "@material-ui/core";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import firebaseApp from "../firebase/firebaseConfig";
import firebase from "firebase";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [errSnack, setErr] = useState({ msg: "", open: false });
  const [succSnack, setSucc] = useState(false);
  const auth = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("displayName", user.displayName);
        firebaseApp.db
          .collection("users")
          .doc(user.uid)
          .get()
          .then((data) => {
            if (data.exists) {
              localStorage.setItem("score", data.data().score);
              history.push("/instruction");
            } else
              firebaseApp.db
                .collection("users")
                .doc(user.uid)
                .set({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                  score: 0,
                  level: 1,
                })
                .then(() => history.push("/instruction"));
          });
        setSucc(true);
      })
      .catch((error) => {
        setErr({ msg: error.message, open: true });
      });
  };
  const authOut = () => {
    firebaseApp.auth.signOut();
  };
  return (
    <div className="div">
      <h1 className="reverse">esrever</h1>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h1 className="h1">Coding</h1>
      <Button
        onClick={auth}
        style={{
          backgroundColor: "var(--main-color)",
          color: "white",
          width: "15em",
          marginTop: "2rem",
        }}
        variant="contained"
      >
        <UseAnimations animation={activity} strokeColor="white" />{" "}
        &nbsp;&nbsp;&nbsp; Login
      </Button>
      <Button
        onClick={authOut}
        style={{
          backgroundColor: "var(--main-color)",
          color: "white",
          width: "15em",
          marginTop: "2rem",
        }}
        variant="contained"
      >
        <UseAnimations animation={activity} strokeColor="white" />{" "}
        &nbsp;&nbsp;&nbsp; logout
      </Button>
      <Snackbar
        open={succSnack}
        onClose={() => setSucc(false)}
        autoHideDuration={1000}
      >
        <Alert severity="success">Hey you are logged in!</Alert>
      </Snackbar>
      <Snackbar
        open={errSnack.open}
        onClose={() => setErr({ open: false })}
        autoHideDuration={1000}
      >
        <Alert severity="error">{errSnack.msg}</Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
