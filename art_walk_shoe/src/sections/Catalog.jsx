import { useContext } from "react";
import { ItemsContext } from "../contexts/items";

import { Card } from "../components";


const Catalog = () => {
  const { items, favoriteItems, searchValue, itemsAction, isLoading } =
    useContext(ItemsContext);


  const renderItems =() => {
    const  filtredItems = items
      .filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()),
      );

    const skeletonArr = [...Array(10)].map((item, index) => (
      <li key={index}>
        <Card isLoading={isLoading} />
      </li>
    ));  


    return isLoading
      ? skeletonArr
      : filtredItems.map((item) => (
          <li key={item.id}>
            <Card
              title={item.title}
              id={item.id}
              imgUrl={item.imgUrl}
              price={item.price}
              onBuy={(item) => itemsAction.addItemsToCart(item)}
              onFavorite={(obj) => itemsAction.onAddToFavorite(obj)}
              isLoading={isLoading}
            />
          </li>
        ));
    
  }


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
          {renderItems()}
        </ul>
      </div>
    </section>
  );
};

export default Catalog