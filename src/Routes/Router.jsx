import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Video from "../pages/Video";
import Add from "../pages/Add";
import Error from "../ui/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:id",
        element: <Video/>,
      },
      {
        path: "/videos/edit/:id",
        element: <Edit />,
      },
      {
        path:"/videos/add",
        element: <Add/>
      }
    ],
  },
]);

export default router;
