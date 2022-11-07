import { useEffect, useState } from "react";
import { ApiClient } from "../utiles/ApiClient";
import MyAppBar from "../widgets/AppBar";
import MyGrid from "../widgets/Grid";

const Home = () => {
  const [ads, setAds] = useState([]);
  const searchAds=async (searchString)=>{
    const response = await ApiClient.post("/search_ads", {
      search_string: searchString,
    });
    setAds(response.data["advertisements"]);
  }
  const getAds = async () => {
    const response = await ApiClient.get("/get_all_ads");
    setAds(response.data["advertisements"]);
  };

  useEffect(() => {
    getAds();
  }, []);
  return (
    <>
      <MyAppBar searchAds={searchAds} />
      <MyGrid adsList={ads}></MyGrid>
    </>
  );
};
export default Home;
