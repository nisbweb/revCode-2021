import RouterView from "./router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Footer from "./components/footer"

function App() {
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6">Reaverse Coding</Typography>
        </Toolbar>
      </AppBar>
      <RouterView />
      <Footer />
    </>
  );
}

export default App;
