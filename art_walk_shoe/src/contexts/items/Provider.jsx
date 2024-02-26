import { useState, useEffect } from "react";
import { ItemsContext } from "./context";
import axios from "axios";

export const ItemsProvider = ({ children}) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);


  const itemsAction = {
    addItemsToCart: (item) => {
      axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart", item);
      setCartItems([...cartItems, item]);
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
    axios.delete(`https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  };


  return (
    <ItemsContext.Provider
      value={{
        items,
        cartItems,
        searchValue,
        cartOpen,
        setCartOpen, itemsAction,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
  

  