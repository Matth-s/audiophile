import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./feature/article.slice";
import axios from "axios";

import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import ViewProduct from "./pages/ViewProduct";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";

function App() {
  const dispatch = useDispatch();
  const [appReady, setAppReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          "https://raw.githubusercontent.com/Matth-s/dataAudiophile/main/data.json"
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch(setData(res.data));
            setAppReady(true);
          }
        })
        .catch((error) => {
          setAppReady(false);
          setError(true);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      {appReady ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/:category/:id" element={<ViewProduct />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      ) : (
        error && <Error />
      )}
    </>
  );
}

export default App;
