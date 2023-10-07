import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const Protected = ({ children }) => {
  const { userGuard } = useContext(Context);
  if (!userGuard) {
    return <Navigate to="/register" replace />;
  } else {
    return children;
  }
};

export default Protected;
