import { useState, useEffect } from "react";
import { ItemsContext } from "./context";
import axios from "axios";

export const ItemsProvider = ({ children}) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState( JSON.parse(localStorage.getItem('cartItems')) || []);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))}, [cartItems]);

  useEffect(() => {
    async function fetchData() {
      const favoriteResponse = await axios.get(
        "https://65d74b6527d9a3bc1d7aa870.mockapi.io/favorite"
      );
      const itemsResponse = await axios.get(
        "https://65d74b6527d9a3bc1d7aa870.mockapi.io/items"
      );

      setIsLoading(false);

      setFavoriteItems(favoriteResponse.data);
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
      // axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart", item);
      
    },

    onAddToFavorite: (obj) => {
      console.log(obj);
      if (favoriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://65d74b6527d9a3bc1d7aa870.mockapi.io/favorite/${Number(obj.id)}`
        );
        // setFavoriteItems((prev) =>
        //   prev.filter((item) => Number(item.id) !== Number(obj.id))
        // );
      } else {
        axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/favorite", obj);
        setFavoriteItems((prev) => [...prev, obj]);
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
    axios.delete(`https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart/${id}`);
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
        favoriteItems,
        setCartOpen,
        itemsAction,
        isLoading
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
  

  