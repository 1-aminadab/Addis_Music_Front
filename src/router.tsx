import { createBrowserRouter } from "react-router-dom";
import { CustomHome } from "./pages/home/Home";
import { AuthForm } from "./pages/auth/auth";

type RouteElement = React.ReactElement | null;
interface Route {
  path: string;
  element: RouteElement;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomHome/>,
  },
  {
    path: "/auth",
    element: <AuthForm/>,
  },
] as Route[]); 