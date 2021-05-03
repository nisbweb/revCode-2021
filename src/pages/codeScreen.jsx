import firebaseapp from "../firebase/firebaseConfig";
import LoginPlease from "../components/loginPlease";
import { useParams } from "react-router-dom";
import { Grid, Select, MenuItem, Slider, Button } from "@material-ui/core";
import { useState } from "react";
import QuesBox from "../components/questionBox";

// Ace editor imports
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeScreen = () => {
  let { number } = useParams();
  let [lang, setLang] = useState("python");
  let [font, setFont] = useState(14);
  let flex = {
    display: "flex",
    alignItems: "center",
  };
  let langs = ["python", "c_cpp", "javascript", "java"];
  if (firebaseapp.auth.currentUser) {
    return (
      <Grid
        style={{ ...flex, justifyContent: "center", height: "80vh" }}
        container
        spacing={6}
      >
        <Grid xs={6} item>
          <div style={{ ...flex, justifyContent: "space-evenly" }}>
            <div style={flex}>
              <span style={{ marginRight: "1rem" }}>Select Language:</span>
              <Select
                onChange={(event) => setLang(event.target.value)}
                labelId="Select Language"
                value={lang}
                style={{ color: "white" }}
              >
                {langs.map((ele) => (
                  <MenuItem key={ele} value={ele}>
                    {ele.normalize()}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div style={flex}>
              <span style={{ marginRight: "1rem" }}>Font Size</span>
              <Slider
                defaultValue={14}
                getAriaValueText={(value) => setFont(value)}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={10}
                max={20}
                style={{ width: "100px" }}
              />
            </div>
          </div>
          <br />
          <AceEditor
            placeholder="Placeholder Text"
            mode={lang}
            theme="twilight"
            fontSize={font}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={``}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 4,
            }}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          style={{
            ...flex,
            flexDirection: "column",
            backgroundColor: "#424242",
            color: "var(--text-color)",
            height: "60vh",
          }}
          xs={3}
          item
        >
          <QuesBox code={false} number={number} />
          <br/><br/><br/>
          <Button
            style={{
              margin: 10,
              backgroundColor: "var(--main-color)",
            }}
            variant="contained"
            color="inherit"
          >
            Run your code
          </Button>
          <Button
            style={{
              margin: 10,
              color: "var(--main-color)",
            }}
            variant="outlined"
            color="inherit"
          >
            Submit your code
          </Button>
        </Grid>
      </Grid>
    );
  } else return <LoginPlease />;
};

export default CodeScreen;
