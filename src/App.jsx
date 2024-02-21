import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromAPI } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromAPI("/configuration")
      .then((response) => {
        console.log(response);
        const url = {
          backDrop: response.images.secure_base_url + "original",
          poster: response.images.secure_base_url + "original",
          profile: response.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })

      .catch((err) => console.error(err));
  };
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
