
import { useState } from "react";
import { useContext } from "react";
import ContentLoader from "react-content-loader";

import { Button, Btn } from "./index";
import { Favorite  } from "../assets/icons";
import { ItemsContext } from "../contexts/items";

const Card = ({
  title,
  imgUrl,
  price,
  onBuy,
  id,
  favorited,
  added,
  isLoading ,
  onFavorite,
}) => {
  
  const [isFavorite, setIsFavorite] = useState(favorited);
  // const { itemsAction } = useContext(ItemsContext);
  const { isItemAdded } = useContext(ItemsContext);



  const onClickBuyNow = () => {
    onBuy({ title, imgUrl, price, id });
  
  };

  const onClickFavorite = () => {
    onFavorite({ title, imgUrl, price, id });
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={280}
          height={455}
          viewBox="0 0 280 455"
          backgroundColor="#eaeff1"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="334" rx="10" ry="10" width="280" height="40" />
          <rect x="0" y="0" rx="40" ry="40" width="280" height="320" />
          <rect x="1" y="390" rx="10" ry="10" width="90" height="30" />
          <rect x="165" y="390" rx="20" ry="20" width="116" height="30" />
        </ContentLoader>
      ) : (
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
                <Btn Icon={Favorite} isFavorite />
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
              {isItemAdded(id) ? (
                <Button
                  label="Remove"
                  onClick={onClickBuyNow}
                  isAdded={isItemAdded(id)}
                />
              ) : (
                <Button label="Buy now" onClick={onClickBuyNow} />
              )}

              {/* // <Button label="Buy now" onClick={onClickBuyNow} isAdded={isAdded} /> */}
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Card