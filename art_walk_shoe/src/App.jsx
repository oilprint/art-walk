import { useState, useEffect } from "react";
import { Header, Catalog } from "./sections";
import { Cart } from "./components";



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

   
  useEffect(() => {
    fetch("https://65d74b6527d9a3bc1d7aa870.mockapi.io/items")
      .then((res) =>{return  res.json()})
      .then((json) => {setItems(json);})
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  
  const onRemoveItem = (obj) => {
    console.log(obj);
    console.log(obj.id);
    setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    console.log(cartItems);
  }
 
  return (
    <>
      {cartOpen && (
        <Cart
          onClickClose={() => setCartOpen(false)}
          items={cartItems}
          onClickRemove={(obj) => onRemoveItem(obj)}
        />
      )}
      <Header
        onClickCart={() => setCartOpen(true)}
        onSearch={onChangeSearchInput}
        searchValue={searchValue}
        onSearchClear={() => setSearchValue("")}
      />

      <Catalog
        items={items}
        searchValue={searchValue}
        onBuy={(obj) => onAddToCart(obj)}
      />
    </>
  );
}

export default App
