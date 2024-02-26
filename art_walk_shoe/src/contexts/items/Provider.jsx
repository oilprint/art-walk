import { useState, useEffect } from "react";
import { ItemsContext } from "./context";
import axios from "axios";

export const ItemsProvider = ({ children}) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem('cartItems')) || []);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))}, [cartItems]);

  useEffect(() => {
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/favorite")
      .then((res) => setFavoriteItems(res.data));
  }, []);


  const itemsAction = {
    addItemsToCart: (item) => {
      // axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart", item);
      setCartItems((prev) => [...prev, item]);
    },

    onAddToFavorite: (obj) => {
      axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/favorite", obj);
      setFavoriteItems((prev) => [...prev, obj])
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
        favoriteItems,
        setCartOpen,
        itemsAction,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
  

  