import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Produce'
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewItem({
      ...newItem,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...newItem
    })
    setNewItem({
      name: '',
      category: 'Produce'
    })
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
