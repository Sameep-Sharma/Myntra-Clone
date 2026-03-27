import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HomeItem from "../Components/HomeItem";
import FetchItems from "../Components/FetchItems";
function App() {
   
  return (
    <>
      <Header></Header>
      <FetchItems/>
      <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;
