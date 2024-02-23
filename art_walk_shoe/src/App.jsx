import { useState, useEffect } from "react";
import { Header, Catalog } from "./sections";



function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://65d74b6527d9a3bc1d7aa870.mockapi.io/items")
      .then((res) =>{return  res.json()})
      .then((json) => {setItems(json);})
  }, [])
  

  return (
    <>
      {/* <Cart /> */}
      <Header />
     
      <Catalog items={items} />
    </>
  );
}

export default App
