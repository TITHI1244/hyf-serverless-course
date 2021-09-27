import Products from "./components/Products";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Good Green Groceries</h1>
      <Products />      
    </div>
  );
}

export default App;
