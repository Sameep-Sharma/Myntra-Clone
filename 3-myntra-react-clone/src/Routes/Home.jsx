import HomeItem from "../Components/HomeItem";

const Home = () => {

  const item = {
    image: "images/1.jpg",
    company: "Nike",
    item_name: "Air Max Shoes",
    current_price: 2999,
    original_price: 4999,
    discount_percentage: 40,
    rating: { stars: 4.5, count: 1200 },
  };
  return (
    <main>
      <div className="items-container">
        <HomeItem item={item} />
      </div>
    </main>
  );
};

export default Home;
