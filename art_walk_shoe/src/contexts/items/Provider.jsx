import { useState, useEffect } from "react";
import { ItemsContext } from "./context";
import axios from "axios";

export const ItemsProvider = ({ children}) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem('cartItems')) || []);
  const [favoritedItems, setFavoritedItems] = useState(
    JSON.parse(localStorage.getItem('favoritedItems')) || []
  );
  // const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState();
 

  const isItemAdded = (id) => { return cartItems.some((obj) => Number(obj.id) === Number(id))};
  const isFavorited = (id) => {
    return favoritedItems.some((obj) => Number(obj.id) === Number(id));
  };
  
   useEffect(() => {
     setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.price), 0));
   }, [cartItems]);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  }, [cartItems]);

  useEffect(() => {
    
    localStorage.setItem("favoritedItems", JSON.stringify(favoritedItems));
  }, [favoritedItems]);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://65d74b6527d9a3bc1d7aa870.mockapi.io/items"
      );
      setIsLoading(false);

      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);


  const itemsAction = {
    addItemsToCart: (obj) => {
       if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
         setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
       } else {
         setCartItems((prev) => [...prev, obj]);      
       } 
    },

    onAddToFavorite: (obj) => {
      console.log(obj.id);
        if (
          favoritedItems.find((favObj) => Number(favObj.id) === Number(obj.id))
        ) {
          setFavoritedItems((prev) =>
            prev.filter((item) => item.id !== obj.id))
          
        } else {
           console.log(favoritedItems);
          setFavoritedItems([...favoritedItems, obj]);
          console.log(favoritedItems);
        }
        
    },

    onChangeSearchInput: (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    },

    onSearchClear: () => {setSearchValue("")
    },

    onClickOpenCart: () => setCartOpen(true),

    onClickCloseCart: () => setCartOpen(false),

    onRemoveItem: (id) => {
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    }

  };


  return (
    <ItemsContext.Provider
      value={{
        items,
        cartItems,
        searchValue,
        cartOpen,
        favoritedItems,
        setCartOpen,
        itemsAction,
        isLoading,
        isItemAdded,
        isFavorited,
        total,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
  

  