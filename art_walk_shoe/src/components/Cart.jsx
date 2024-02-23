import { CartIcon } from "../assets/icons";
import { Btn, CloseBtn } from "./index";

const Cart = () => {
  return (
    <div className="backdrop fixed left-0 top-0 z-[999] w-screen h-screen backdrop-blur-xl bg-dark/70 ">
      <div className="relative py-8 px-5 bg-light max-w-[400px] w-full rounded-[20px] ml-auto h-full flex flex-col justify-between">
        <div className="w-full flex-1 flex flex-col justify-between">
          <h2 className=" text-[32px] mb-3">Your cart</h2>
          <div className="flex flex-col h-full justify-between">
            <ul>
              <li className="flex gap-3 items-stretch py-5  ">
                <div className="shrink-0 overflow-hidden rounded-xl border border-primary border-solid ">
                  <img
                    className="h-full object-cover"
                    src="/images/sneakers/2.jpg"
                    alt=""
                    width={80}
                    height={106}
                  />
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div className="flex gap-5 justify-between">
                    <p>White sneakers with flowers</p>
                    <Btn Icon={CartIcon} />
                  </div>
                  <div className="text-accent text-3xl">
                    <span>$</span>
                    <span>4343</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex flex-col items-center ">
              <div className="flex justify-between text-2xl w-full mb-2">
                <p>Subtotal: </p>
                <div>
                  <span>$</span>
                  <span>158</span>
                </div>
              </div>
              <button className="cursor-pointer shrink-0 px-10 py-2 text-base rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 ">
                Checkout
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <CloseBtn />
        </div>
      </div>
    </div>
  );
}

export default Cart