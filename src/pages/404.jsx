import Lottie from "react-lottie";
import animation from "../assets/JSON/404.json";
import { Button } from "@material-ui/core"

const Page404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <h1>Hey Man !</h1>
      <h3>We love your ethu, but sadly you won't find anything here</h3>
      <Button variant="contained" color="secondary" >Go back</Button>
      <Lottie options={defaultOptions} width={"70%"} />
    </>
  );
};

export default Page404;
