import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { AuthProtected } from "./component/index.js";
import AddGlyph from "./Pages/AddGlyph.jsx"
import AllGlyphs from "./Pages/AllGlyphs.jsx";
import EditGlyph from "./Pages/EditGlyph.jsx";
import Glyph from "./Pages/Glyph.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthProtected>
            <Login />
          </AuthProtected>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthProtected authentication={false}>
            <Signup />
          </AuthProtected>
        ),
      },
      {
        path: "/all-glyph",
        element: (
          <AuthProtected authentication>
            {" "}
            <AllGlyphs />
          </AuthProtected>
        ),
      },
      {
        path: "/create-glyph",
        element: (
            <AuthProtected authentication>
                {" "}
                <AddGlyph />
            </AuthProtected>
        ),
    },
      {
        path: "/edit-glyph/:slug",
        element: (
          <AuthProtected authentication>
            {" "}
            <EditGlyph />
          </AuthProtected>
        ),
      },
      {
        path: "/glyph/:slug",
        element: <Glyph />,
    },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
