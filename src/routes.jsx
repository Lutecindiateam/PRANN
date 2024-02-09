
import { Profile, SignIn, SignUp } from "@/pages";
import Home from "./pages/home";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Donate",
   path:"/donate",
    element: <Donate />,
  },
  {
    name: "Information",
   path:"/information",
    element: <Information />,
  },
  {
    name: "personal",
   path:"/personal",
    element: <Personal />,
  },
  {
    name: "Post",
   path:"/post",
    element: <Post />,
  },
];

export default routes;
