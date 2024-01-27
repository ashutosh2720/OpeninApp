import "../../styles/authStyle/auth.scss";
import leftSide from "../../../public/image/left-side.png";
import ellipseLogo from "../../../public/image/ellipse-logo.jpg";
import { BsGithub } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

// component imports
import SignIn from "./../../components/signIn/SignIn";

const Auth = () => {
  return (
    <div className="container">
      <div>
        <img src={ellipseLogo} alt="ellipse-logo" className="ellipse_logo" />
        <img src={leftSide} alt="leftSideImage" className="left_side_image" />
        <div className="navbar"></div>
        <div className="base_text">Base</div>
        <div className="social_logo">
          <BsGithub />
          <FaSquareTwitter />
          <FaLinkedin />
          <IoLogoDiscord />
        </div>
      </div>
      {/* *********************************************** */}
      <div className="account_container">
        <div className="sign_in_text_container">
          <div>Sign In</div>
          <div>Sign in to your account</div>
        </div>
        <div className="login_icon">
          <div className="google_container">
            {" "}
            <FcGoogle className="google_icon" />{" "}
            <div className="google_text">sign in with google</div>
          </div>
          <div className="apple_container">
            {" "}
            <FaApple className="apple_icon" />{" "}
            <div className="apple_text">sign in with apple</div>
          </div>
        </div>
        {/* components */}
        <div>
          <SignIn />
        </div>
        <div className="do_not_account">
          Do not have an account? <span>Register here</span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
