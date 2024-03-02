import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';
import { Card, Pagination } from '../components';
import { motion } from 'framer-motion';

const Catalog = () => {
  const { items, itemsAction, isLoading, setCurrentPage } = useContext(ItemsContext);

  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  const renderItems = () => {
    const skeletonArr = [...Array(8)].map((item, index) => (
      <li key={index}>
        <Card isLoading={isLoading} />
      </li>
    ));
    return isLoading
      ? skeletonArr
      : items.map((item, i) => (
          <motion.li
            key={item.id}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}>
            <Card
              title={item.title}
              id={item.id}
              imgUrl={item.imgUrl}
              price={item.price}
              onBuy={(item) => itemsAction.addItemsToCart(item)}
              onFavorite={(obj) => itemsAction.onAddToFavorite(obj)}
              isLoading={isLoading}
            />
          </motion.li>
        ));
  };

  return (
    <section className="relative">
      <div className="bc-accent sm:rounded-[60px] rounded-[40px] bg-dark" />
      <div className="container">
        <h1 className="font-lucky ss:text-[70px] lg:text-[100px] xs:text-[50px] text-[40px] text-light text-center">
          <span className="ss:text-[150px] lg:text-[200px] xs:text-[100px] text-[60px] uppercase text-light">
            ART
          </span>
          sneakers
        </h1>
        <ul className="grid md:grid-cols-4 ss:grid-cols-3 grid-cols-2 gap-4 gap-y-8 w-full mb-10">
          {renderItems()}
        </ul>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </section>
  );
};

export default Catalog;
