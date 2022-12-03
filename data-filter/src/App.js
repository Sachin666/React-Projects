import { useState } from "react";
import "./App.css";

function FilterProductTable({ products }) {
  const [filterItem, setFilterItem] = useState("");
  const [inStock, setInStock] = useState(false);

  return (
    <div className="flex">
      <SearchBar
        filterItem={filterItem}
        inStock={inStock}
        onFilterChange={setFilterItem}
        onStockChange={setInStock}
      />
      <ProductTable
        products={products}
        filterItem={filterItem}
        inStock={inStock}
      />
    </div>
  );
}

function SearchBar({ filterItem, inStock, onFilterChange, onStockChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterItem}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => onStockChange(e.target.checked)}
        />{" "}
        Only show products in Stock
      </label>
    </form>
  );
}

function ProductTable({ products, filterItem, inStock }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterItem.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function App() {
  const items = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return <FilterProductTable products={items} />;
}

export default App;
