
import { useState } from "react";
import { Button, Btn } from "./index";
import { Favorite  } from "../assets/icons";

const Card = ({
  title,
  imgUrl,
  price,
  onBuy,
  id,
  favorited = false,
  onFavorite,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickBuyNow = () => {
    onBuy({ title, imgUrl, price, id });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="flex flex-col max-w-[280px] w-full h-full" id={id}>
      <div className="relative">
        <div className="overflow-hidden rounded-[40px] border  border-primary border-solid w-full mb-2 aspect-[3/4]">
          <img
            className="object-cover h-full"
            src={imgUrl}
            alt={title}
            width="280"
            height="320"
          />
        </div>
        <div onClick={onClickFavorite} className="absolute top-3 right-3">
          {isFavorite ? (
            <Btn Icon={Favorite} isFavorite={true} />
          ) : (
            <Btn Icon={Favorite} />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between grow">
        <h3 className="text-lg font-[700] leading-[1]text-primary mb-2">
          {title}
        </h3>
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