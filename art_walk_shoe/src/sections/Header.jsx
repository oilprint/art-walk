import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ItemsContext } from '../contexts/items';
import { logo, CartIcon, Favorite, SearchIcon, CloseBtnIcon } from '../assets/icons';
import { Cart } from '../components';
import { motion } from 'framer-motion';

const Header = ({ onClickCart }) => {
  const { searchValue } = useContext(ItemsContext);
  const { cartOpen } = useContext(ItemsContext);
  const { itemsAction } = useContext(ItemsContext);
  const { total } = useContext(ItemsContext);
  const { cartItems } = useContext(ItemsContext);

  return (
    <header className="container flex-1 flex justify-between items-center py-2 rounded-[40px] border-2 border-dark bg-light ">
      <div className="relative text-primary ">
        <SearchIcon className="absolute top-2 left-2" />

        {searchValue && (
          <CloseBtnIcon
            onClick={itemsAction.onSearchClear}
            className="absolute top-2 right-2 cursor-pointer"
          />
        )}

        <input
          onChange={itemsAction.onChangeSearchInput}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className="text-primary h-10 pl-9 max-w-[250px] w-full rounded-[40px] border border-primary border-solid bg-light placeholder:text-grey placeholder:font-lucky placeholder:tracking-wider"
        />
      </div>

      <Link to="/">
        <motion.img
          src={logo}
          alt="logo ArtWalk Shoe Co."
          width={515}
          height={90}
          whileHover={{
            scale: 1.2,
          }}
        />
      </Link>

      <div className="flex justify-end gap-5">
        <NavLink
          to="favorite"
          className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light">
          <Favorite />
        </NavLink>

        <button
          onClick={itemsAction.onClickOpenCart}
          type="button"
          className={`relative cursor-pointer flex flex-1 flex-center items-center border-[2px] border-solid rounded-full border-primary text-primary h-10 w-auto px-3 pypx-2.5  ${
            cartItems.length > 0 ? 'bg-accent' : 'bg-light'
          } transition ease-in-out duration-300`}>
          {cartItems.length > 0 ? (
            <div className="font-lucky text-dark text-xl ">
              <span>{total}</span>
              <span>$</span>
            </div>
          ) : (
            ''
          )}

          <CartIcon />
        </button>
      </div>

      {cartOpen && <Cart />}
    </header>
  );
};

export default Header;
