import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
const Bag = () => {

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
    <>
      
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem item ={item} />
          </div>
          <BagSummary></BagSummary>
          
        </div>
      </main>
      
    </>
  );
};

export default Bag;
