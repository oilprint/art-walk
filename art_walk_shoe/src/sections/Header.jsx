import {  logo, CartIcon, Favorite } from "../assets/icons";
import { Btn } from "../components";


const Header = () => {
  return (
    <header className="container flex-1 flex justify-between py-10 rounded-[10px] border-2 border-dark">
      <a href="#">
        <img src={logo} alt="logo ArtWalk Shoe Co." width={304} height={36} />
      </a>
      <div className="flex justify-end gap-5">
        <Btn Icon={Favorite} />
        <button
          type="button"
          className="flex flex-1 flex-center items-center text-primary border rounded-full border-primary h-10 w-auto px-3 py-2.5 bg-light"
        >
          <div className="font-lucky text-dark text-xl">
            <span>125</span>
            <span>$</span>
          </div>
          <CartIcon />
        </button>
      </div>
    </header>
  );
}

export default Header