import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const RequireAuth = ({ children }) => {
  const loginToken = localStorage.getItem("token");

  return loginToken ? <>{children}</> : <Navigate to={"/"} />;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default RequireAuth;
