import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Features from "../Pages/Features";
import Dashboard from "../components/Dashboard/Dashboard";
import Layoutdash from "../components/Dashboard/Layoutdash";
// import Signup from "../Pages/Signup";
// import Signin from "../Pages/Signin";
// import Game from "../Pages/Game";
import Css from "../Pages/2/Css";
import Signup from "../Pages/Signup";
import QuestionPart from "../components/QuestionPart";
import Question2 from "../Pages/2/Question2";
import Question3 from "../Pages/3/Question3";
import Css3 from "../Pages/3/Css";
import Css4 from "../Pages/4/Css";
import Question4 from "../Pages/4/Question3";
// import Css2 from "../Pages/2/Css";
// import Framer from "../Pages/Framer";
// import Rabbit from "../Pages/Rabbit";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Signup />,
        // element: <Css />,
        // element: <Framer />,
        // element: <Rabbit />,
      },

      {
        path: "questionpart",
        element: <QuestionPart />,
      },
      {
        path: "question2",
        element: <Question2 />,
      },
      {
        path: "question3",
        element: <Question3 />,
      },
      {
        path: "question4",
        element: <Question4 />,
      },
      {
        path: "css",
        element: <Css />,
      },
      {
        path: "css3",
        element: <Css3 />,
      },
      {
        path: "css4",
        element: <Css4 />,
      },
    ],
  },
  {
    path: "contact",
    element: <Contact />,
  },
  // {
  // path: "dashboard",
  //   element: <Dashboard />,
  // },
  {
    // path: "layoutdash",
    path: "dashboard",
    element: <Layoutdash />,
    children: [
      {
        element: <Dashboard />,
      },
    ],
  },
]);
