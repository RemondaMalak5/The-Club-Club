//   



import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const savedBranch = localStorage.getItem("branch");
  const location = useLocation();

  // نجيب اسم الفرع من الرابط
  const pathParts = location.pathname.split("/");
  const branchFromUrl = pathParts[2]; 
  // /branches/6-october/profile

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ branch: branchFromUrl }}
        replace
      />
    );
  }

  // لو التوكن موجود لكن الفرع مختلف
  if (savedBranch !== branchFromUrl) {
    localStorage.removeItem("token");
    localStorage.removeItem("branch");

    return (
      <Navigate
        to="/login"
        state={{ branch: branchFromUrl }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;