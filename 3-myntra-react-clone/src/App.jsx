import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeItem from "./Components/HomeItem";
function App() {
  return (
    <>
    <Header></Header>
      <main>
        <div className="items-container">
        <HomeItem item = {item} />
        </div>
      </main>
    <Footer></Footer>
    </>
  );
}

export default App;
