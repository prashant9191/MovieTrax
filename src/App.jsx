import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchReasult from "./pages/searchResult/SearchReasult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";


function App() {
  const dispatch = useDispatch();
  const {url}=useSelector((state)=>state.home)
  useEffect(() => {
    api();
  }, []);
  const api = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };
  return <div className="App">


  </div>;
}

export default App;
