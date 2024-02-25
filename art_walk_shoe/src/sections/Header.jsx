import { Link, NavLink } from "react-router-dom";
import {
  logo,
  CartIcon,
  Favorite,
  SearchIcon,
  CloseBtnIcon,
} from "../assets/icons";
import { Btn } from "../components";


const Header = ({ searchValue, onClickCart, onSearch, onSearchClear }) => {
  return (
    <header className="container flex-1 flex justify-between py-10 rounded-[10px] border-2 border-dark">
      <div className="relative text-grey ">
        <SearchIcon className="absolute top-2 left-2" />

        {searchValue && (
          <CloseBtnIcon
            onClick={onSearchClear}
            className="absolute top-2 right-2 cursor-pointer"
          />
        )}

        <input
          onChange={onSearch}
          value={searchValue}
          type="text"
          placeholder="Search..."
          className="text-primary h-10 pl-9 max-w-[250px] w-full rounded-[40px] border border-primary border-solid bg-light placeholder:text-grey"
        />
      </div>

      <Link to="/">
        <img src={logo} alt="logo ArtWalk Shoe Co." width={304} height={36} />
      </Link>
      
      <div className="flex justify-end gap-5">
        <NavLink to="favorite" className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light">
          <Favorite /> 
        </NavLink>
        <button
          onClick={onClickCart}
          type="button"
          className="flex flex-1 flex-center items-center text-primary border rounded-full border-primary h-10 w-auto px-3 py-2.5 bg-light cursor-pointer"
        >
          <div className="font-lucky text-dark text-xl ">
            <span>125</span>
            <span>$</span>
          </div>
          <CartIcon />
        </button>
      </div>
    </header>
  );
};

export default Header