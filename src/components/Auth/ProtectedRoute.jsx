import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const savedBranch = localStorage.getItem("branch"); // الفرع اللي سجل دخول منه
  const location = useLocation();

  // نجيب الفرع من الرابط
  const pathParts = location.pathname.split("/");
  const branchFromUrl = pathParts[2]; // /branches/6-october → branchFromUrl = "6-october"

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (savedBranch !== branchFromUrl) {
    // حاول يدخل فرع مختلف → لازم يسجل دخول جديد
    localStorage.removeItem("token");
    localStorage.removeItem("branch");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;