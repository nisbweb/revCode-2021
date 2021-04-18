import "../css/home.css";
import Lottie from "react-lottie";
import animData from "../assets/JSON/code.json";
import { Button } from "@material-ui/core";
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity'

const Home = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="div">
      <h1 className="reverse">esrever</h1>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h1>Coding</h1>
      <Button style={{backgroundColor: 'var(--main-color)', color: 'white', width: '15em', marginTop: '2rem'}} variant="contained">
      <UseAnimations animation={activity} strokeColor="white" /> &nbsp;&nbsp;&nbsp;
        Login
      </Button>
    </div>
  );
};

export default Home;
