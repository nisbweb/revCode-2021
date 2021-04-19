import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const QuestionScreen = () => {
  return (
    <div>
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
                Question {value}
              </span>
              {value < 3 && (
                <>
                  <span style={{ margin: 15 }}>Enter Input</span>{" "}
                  <TextField
                    id="standard-basic"
                    label="Input"
                    color="secondary"
                    variant="outlined"
                  />
                </>
              )}
              {value > 2 && (
                <div
                  style={{
                    backgroundColor: "#424242",
                    color: "var(--text-color)",
                    padding: "1em",
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
                    fullWidth
                  />
                </div>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default QuestionScreen;
