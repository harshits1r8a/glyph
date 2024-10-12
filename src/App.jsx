import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import authService from "./appwrite/authService";
import { Footer, Header, Loader} from "./component";
import { login, logout } from "./store/reducers/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout);
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <Loader/>
  );
}

export default App;
