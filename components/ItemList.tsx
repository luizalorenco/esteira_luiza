import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

type Item = {
  id: number;
  name: string;
  description: string;
};

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.getAllItems().then((response) => setItems(response.data));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
