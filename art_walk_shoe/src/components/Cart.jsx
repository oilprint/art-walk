import { useContext } from "react";
import AppContext from "../context";
import { Remove } from "../assets/icons";
import { Btn, CloseBtn } from "./index";

const Cart = ({ onClickClose, onRemoveItem }) => {
  const { cartItems } = useContext(AppContext);

  return (
    <div className="backdrop fixed left-0 top-0 z-[999] w-screen h-screen backdrop-blur-xl bg-dark/70 ">
      <div className="relative py-8 px-6 bg-light max-w-[400px] w-full rounded-[20px] ml-auto h-full flex flex-col justify-between font-lucky">
        <div className="w-full flex-1 flex flex-col justify-between">
          <h2 className=" text-[32px] mb-3">Your cart</h2>
          {cartItems.length > 0 ? (
            <div className="flex flex-col h-full justify-between">
              <ul className="overflow-auto max-h-[70vh] ">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between gap-3 items-stretch py-5"
                  >
                    <div className="shrink-0 overflow-hidden rounded-xl border border-primary border-solid ">
                      <img
                        className="h-full object-cover"
                        src={item.imgUrl}
                        alt={item.title}
                        width={80}
                        height={106}
                      />
                    </div>
                    <div className="flex flex-col justify-between py-2 w-full">
                      <div className="flex gap-5 justify-between">
                        <p>{item.title}</p>
                        <Btn
                          Icon={Remove}
                          onClick={() => onRemoveItem(item.id)}
                        />
                      </div>
                      <div className="text-accent text-3xl">
                        <span>$</span>
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </li>
                ))}
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
          ) : (
            <div className="grow flex flex-col justify-center items-center ">
              <Remove width="60px" height="60px" />
              <p className="mb-10 mt-1">Your cart is empty</p>
              <button
                onClick={onClickClose}
                className="cursor-pointer shrink-0 px-10 py-2 text-base rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 "
              >
                Go back
              </button>
            </div>
          )}
          {/* <div className="flex flex-col h-full justify-between">
            <ul className="overflow-auto max-h-[70vh] ">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between gap-3 items-stretch py-5"
                >
                  <div className="shrink-0 overflow-hidden rounded-xl border border-primary border-solid ">
                    <img
                      className="h-full object-cover"
                      src={item.imgUrl}
                      alt={item.title}
                      width={80}
                      height={106}
                    />
                  </div>
                  <div className="flex flex-col justify-between py-2 w-full">
                    <div className="flex gap-5 justify-between">
                      <p>{item.title}</p>
                      <Btn
                        Icon={Remove}
                        onClick={() => onRemoveItem(item.id)}
                      />
                    </div>
                    <div className="text-accent text-3xl">
                      <span>$</span>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </li>
              ))}
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
          </div> */}
        </div>

        <CloseBtn onClick={onClickClose} className="absolute top-4 right-4" />
      </div>
    </div>
  );
};

export default Cart;
