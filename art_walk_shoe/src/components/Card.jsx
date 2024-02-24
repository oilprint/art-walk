
import { useState } from "react";
import { Button, Btn } from "./index";
import { Favorite  } from "../assets/icons";

const Card = ({ title, imgUrl, price, onBuy, id }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickBuyNow = () => {
    onBuy({title, imgUrl, price, id});
    setIsAdded(!isAdded)
  }
    
  

  return (
    <article className="fkex flex-col max-w-[280px] w-full" id={id}>
      <div className="relative">
        <div className="overflow-hidden rounded-[40px] border  border-primary border-solid w-full mb-2 aspect-[2/3]">
          <img
            className="object-cover h-full"
            src={imgUrl}
            alt={title}
            width="280"
            height="370"
          />
        </div>
        <div className="absolute top-3 right-3">
          <Btn Icon={Favorite} />
        </div>
      </div>

      <div>
        <h3 className="font-lucky text-xl text-primary ">{title}</h3>
        <div className="flex justify-between flex-wrap">
          <div className="mr-6 mb-1 font-lucky text-[32px] text-accent ">
            <span>$</span>
            <span>{price}</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button label="Buy now" onClick={onClickBuyNow} isAdded={isAdded} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card