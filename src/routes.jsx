import { createBrowserRouter } from "react-router-dom";
import {Admin, Resource} from "react-admin";
import App from "../src/routes/root.jsx";
import AdminPage from "../src/routes/admin.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/admin",
        element: <AdminPage/>,
        routes: [
            {
                path: "/admin",
            },
            {
                path: "/users",
            }
        ]
    }
  ]);
  
export default router;