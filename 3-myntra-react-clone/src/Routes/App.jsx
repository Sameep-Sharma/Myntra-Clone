import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeItem from "../Components/HomeItem";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
function App() {
   
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> :  <Outlet/>}
      <Footer></Footer>
    </>
  );
}

export default App;
