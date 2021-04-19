import Lottie from "react-lottie";
import animData from "../assets/JSON/login.json";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";

const LoginPlease = () => {
  const history = useHistory();
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
      <h3 className="h3">this page is locked please login to continue</h3>
      <Lottie options={errOptions} width={300} height={300} />
      <Button
        onClick={() => history.push("/")}
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
};

export default LoginPlease;
