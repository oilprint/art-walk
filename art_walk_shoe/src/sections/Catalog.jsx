import { Card } from "../components";


const Catalog = ({items}) => {
  

  return (
    <section>
      <div className="container">
        <h1>2</h1>
        <ul className="flex flex-wrap gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <Card
                title={item.title}
                price={item.price}
                photoUrl={item.photoUrl}
                onClickBuy={() => console.log(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Catalog