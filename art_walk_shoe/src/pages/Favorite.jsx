import { useContext } from "react";
import { ItemsContext } from "../contexts/items";
import { Card } from "../components";

const Favorite = () => {
  const { favoritedItems } = useContext(ItemsContext);
  const { searchValue } = useContext(ItemsContext);
  const { itemsAction } = useContext(ItemsContext);

  console.log(favoritedItems);

  return (
    <section>
      <div className="container">
        <h1 className="font-lucky ss:text-[70px] lg:text-[100px] xs:text-[50px] text-[40px] text-dark text-center">
          <span className="ss:text-[150px] lg:text-[200px] xs:text-[100px] text-[60px] uppercase text-stroke text-light">
            My
          </span>
          favorite
        </h1>
        <ul className="grid md:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-4 gap-y-8 w-full">
          {favoritedItems
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <li key={item.id}>
                <Card
                  title={item.title}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  price={item.price}
                  onBuy={(item) => itemsAction.addItemsToCart(item)}
                  onFavorite={(obj) => itemsAction.onAddToFavorite(obj)}
                  favorited={true}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Favorite;
