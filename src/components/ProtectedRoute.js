import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const jwt = localStorage.getItem('jwt');

  return jwt ? <Component {...props}/> : 
  <Navigate to="/"/>
  // < Component {...props}/>
}
export default ProtectedRoute;