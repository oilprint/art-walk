import { useContext } from "react";
import { ItemsContext } from "../contexts/items";

import { Card } from "../components";
import { useLoaderData } from "react-router-dom";


const Catalog = () => {
  const { items } = useContext(ItemsContext);
  const { searchValue } = useContext(ItemsContext);
  const {itemsAction} = useContext(ItemsContext);

  console.log(itemsAction);
  // const searchValue = useContext(AppContext);

  return (
    <section className="relative">
      <div className="bc-accent sm:rounded-[60px] rounded-[40px] bg-dark" />
      <div className="container">
        <h1 className="font-lucky ss:text-[70px] lg:text-[100px] xs:text-[50px] text-[40px] text-light text-center">
          <span className="ss:text-[150px] lg:text-[200px] xs:text-[100px] text-[60px] uppercase text-stroke text-light">
            ART
          </span>
          sneakers
        </h1>
        <ul className="grid md:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-4 gap-y-8 w-full">
          {items
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
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog