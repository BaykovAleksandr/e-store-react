import "./index.css";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

function Header() {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 21;

  let isOpen = hour >= openHours && hour <= closeHours;

  return (
    <header className="header">
      <h1>Electronic Store</h1>
      <nav className="nav">
        <ul>
          <li>
            {" "}
            Home<a href="#home"></a>
          </li>
          <li>
            {" "}
            Catalog<a href="#catalog"></a>
          </li>
          <li>
            {" "}
            About us<a href="#about"></a>
          </li>
          <li>
            {" "}
            Contacts<a href="contacts"></a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        {isOpen ? (
          <p>
            We are currently open. Hours: {openHours}:00 - {closeHours}:00
          </p>
        ) : (
          <p> We are currently closed</p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((item) => (
          <Product productObj={item} />
        ))}
        {/* <Product
          name="Laptop Pro"
          img="/laptop.png"
          price="1200"
          description="High-performance laptop for professionals."
        />
        <Product
          name="Smartphone X"
          img="/smartphone.png"
          price="800"
          description="Latest model with stunning display."
        /> */}
      </ul>
    </main>
  );
}

function Product({ productObj }) {
  return (
    <li className={`product ${productObj.soldOut ? "sold-out" : ""}`}>
      <img src={productObj.photoName} alt={productObj.name} />
      <div>
        <h3>{productObj.name}</h3>
        <p>{productObj.description}</p>
        <span>
          {productObj.soldOut ? "SOLD OUT" : `${productObj.price} $`}
          
        </span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer is here</footer>;
}

export default App;
