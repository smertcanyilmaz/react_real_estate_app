import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const Protected = ({ children }) => {
  const { userActive } = useContext(Context);
  if (!userActive) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default Protected;
