
import { Donate, Information, Personal, Profile } from "@/pages";
import Home from "./pages/home";
import About from "./pages/about";
import Program from "./pages/program";
import Event from "./pages/event";
import Give from "./pages/waytogive";
import Contact from "./pages/contact";
import Health from "./pages/health";
import Social from "./pages/social";
import Self from "./pages/self";
import Culture from "./pages/culture";
import Education from "./pages/education";
import Volunteer from "./pages/volunteer";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    name: "activities",
    path: "/program",
    element: <Program />,
  },
  {
    name: "events",
    path: "/event",
    element: <Event />,
  },
  // {
  //   name: "Ways To Give",
  //   path: "/give",
  //   element: <Give />,
  // },

  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,

  // },



  {
    name: "Contact Us",
   path:"/Contact",
    element: <Contact />,
  },
  {
   
   path:"/donate",
    element: <Donate />,
  },
  {
   path:"/information",
    element: <Information />,
  },
  {
   path:"/personal",
    element: <Personal />,
  },
  {
    path:"/health",
     element: <Health />,
   },
   {
    path:"/education",
     element: <Education />,
   },
   {
    path:"/culture",
     element: <Culture/>,
   },
   {
    path:"/self",
     element: <Self/>,
   },
   {
    path:"/social",
     element: <Social />,
   },
   {
    path:"/volunteer",
     element: <Volunteer />,
   },
 
];



export default routes;
