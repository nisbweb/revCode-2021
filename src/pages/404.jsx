import Lottie from "react-lottie";
import animation from "../assets/JSON/404.json";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

const Page404 = () => {
  const history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const h1 = {
    fontSize: "2em",
    margin: "10px",
  };
  return (
    <>
      <h1 style={h1}>Hey Man !</h1>
      <h3 style={h1}>We love your ethu, but sadly you won't find anything here</h3>
      <Button onClick={() => history.goBack()} variant="contained" color="secondary">
        Go back
      </Button>
      <Lottie options={defaultOptions} width={"70%"} />
    </>
  );
};

export default Page404;
