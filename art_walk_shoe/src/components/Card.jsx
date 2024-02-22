
import { useState } from "react";
import { Button, Btn } from "./index";
import { Favorite  } from "../assets/icons";

const Card = ({ title, photoUrl, price, onClickBuy }) => {
  const [isAdded, setIsAdded] = useState(false);
  

  return (
    <article>
      <div className="rounded-[40px] border border-primary max-w-[280px] w-full h-[370px]">
        <img src={photoUrl} alt="" width="280" height="370" />
      </div>
      <div>
        <h3 className="font-lucky text-xl text-primary mb-1">
          White sneakers with flowers
        </h3>
        <div className="flex justify-between">
          <div className="font-lucky text-[32px] text-accent ">
            <span>152</span>
            <span>$</span>
          </div>
          <div className="flex gap-4">
            <Btn Icon={Favorite} />
            <Button label="Buy now" onClick={() => setIsAdded(!isAdded)} isAdded={isAdded}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card