import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';
import { categoryList } from '../constants';

const Category = () => {
  const { itemsAction, categoryID } = useContext(ItemsContext);
  return (
    <ul className="flex ss:gap-4  gap-2 flex-wrap justify-center items-center md:mb-12 ss:mb-5 mb-4">
      {categoryList.map((item, idx) => (
        <li
          onClick={() => itemsAction.onCLickCategory(idx)}
          key={idx}
          className={`py-2.5 px-[30px] rounded-[40px] border-light border border-solid cursor-pointer font-medium capitalize hover:bg-light hover:text-dark transition ease-in-out duration-300 ${
            categoryID === idx ? 'bg-light text-dark' : 'text-light bg-dark'
          }`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Category;
