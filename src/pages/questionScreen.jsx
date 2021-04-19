import firebaseapp from "../firebase/firebaseConfig";
import LoginPlease from "../components/loginPlease";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const QuestionScreen = () => {
  if (firebaseapp.auth.currentUser) {
    const inputs = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    const output = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    const run = (index) => console.log(`Running ${index}`);
    return (
      <div style={{ overflow: "hidden", paddingBottom: "10vh" }}>
        <h2 className="h3">Questions</h2>
        <h3 className="h3" style={{ fontSize: "1.3em" }}>
          {localStorage.getItem("displayName")} | Score :{" "}
          {localStorage.getItem("score")}
        </h3>
        <Grid container justify="center" direction="row" spacing={6}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} xs={value < 5 ? (value < 3 ? 3 : 4) : 5} item>
              <Paper
                style={{
                  backgroundColor: "#424242",
                  color: "var(--text-color)",
                  padding: "1em",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "2em",
                    fontWeight: 100,
                  }}
                >
                  Question {value + 1}
                </span>
                {value < 3 && (
                  <>
                    <span style={{ margin: 15 }}>Enter Input</span>{" "}
                    <TextField
                      id="standard-basic"
                      label="Input"
                      color="secondary"
                      variant="outlined"
                      value={inputs[value]}
                    />
                  </>
                )}
                {value > 2 && (
                  <div
                    style={{
                      backgroundColor: "#424242",
                      color: "var(--text-color)",
                      padding: "0.5em",
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ width: "40%" }}>Enter Input</span>
                    <TextField
                      id="standard-basic"
                      label="Input"
                      color="secondary"
                      variant="outlined"
                      value={inputs[value]}
                      fullWidth
                    />
                  </div>
                )}
                <span
                  style={{
                    color: "var(--text-color)",
                    padding: "0.5em",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    margin: 20,
                  }}
                >
                  Output: {output[value]}
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
                    onClick={() => run(value)}
                  >
                    Run
                  </Button>
                  <Button
                    style={{
                      margin: 10,
                      backgroundColor: "var(--main-color)",
                    }}
                    variant="contained"
                    color="inherit"
                  >
                    Code
                  </Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else return <LoginPlease />;
};

export default QuestionScreen;
