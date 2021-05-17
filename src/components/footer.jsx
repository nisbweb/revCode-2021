import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github"
import linkedin from "react-useanimations/lib/linkedin"
import instagram from "react-useanimations/lib/instagram"

const Footer = () => {
  const styles = {
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--highlight-color)",
    height: "3vh",
    width: "100%",
    color: "white",
    paddingLeft: 5,
    paddingRight: 5,
  };
  return (
    <>
      <div style={styles}>
          <span>Made with 🧠 by Team NISB</span>
          <span style={{display: 'flex'}}>
            <UseAnimations onClick={() => window.open('https://github.com/nisbweb', '_blank')} animation={github} strokeColor="white" /> &nbsp;&nbsp;&nbsp;
            <UseAnimations onClick={() => window.open('https://www.linkedin.com/in/nie-ieee-student-branch-779682146/', '_blank')} animation={linkedin} strokeColor="white" /> &nbsp;&nbsp;&nbsp;
            <UseAnimations onClick={() => window.open('https://www.instagram.com/ieee_nie/', '_blank')} animation={instagram} strokeColor="white" /> &nbsp;&nbsp;&nbsp;
          </span>
      </div>
    </>
  );
};

export default Footer;
