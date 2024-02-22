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
      <Header />
      <div className="rounded-[40px] border border-primary max-w-[280px] w-full h-[370px]">
        <img
          src="/images/sneakers/2.jpg"
          
          alt=""
          width="280"
          height="370"
        />
      </div>
      <Catalog items={items} />
    </>
  );
}

export default App
