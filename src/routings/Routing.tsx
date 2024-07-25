import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/deepfake-detector" />,
    errorElement: <div>Something Went Wrong</div>,
  },
  {
    path: "/deepfake-detector",
    element: <Home />,
    errorElement: <div>Something Went Wrong</div>,
  },
]);
