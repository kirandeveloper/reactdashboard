import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const ItemList2 = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const ItemList3 = ({ items }) => {
  return (
    <ul>
      {items
        .filter(item => item.isAvailable)
        .map(item => (
          <li key={item.id} style={{ color: item.isFavorite ? 'red' : 'black' }}>
            {item.name}
          </li>
        ))}
    </ul>
  );
};

const ItemList4 = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onItemClick(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const fruits2 = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
  ];

  const fruits3 = [
    { id: 1, name: 'Apple', isAvailable: true, isFavorite: true },
    { id: 2, name: 'Banana', isAvailable: true, isFavorite: false },
    { id: 3, name: 'Cherry', isAvailable: false, isFavorite: true },
    { id: 4, name: 'Date', isAvailable: true, isFavorite: false },
    { id: 5, name: 'Elderberry', isAvailable: false, isFavorite: false },
  ];

  const fruits4 = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
  ];

  const handleItemClick = (item) => {
    alert(`You clicked on ${item.name}`);
  };

  return (
    <div>
      <h3>Rendering a List of Items</h3>
      <ItemList items={fruits} />
      <h3>Rendering a List of Objects with Unique Keys</h3>
      <ItemList2 items={fruits2} />
      <h3>Conditional Rendering within Lists</h3>
      <ItemList3 items={fruits3} />
      <h3>Handling Events in List Items</h3>
      <ItemList4 items={fruits4} onItemClick={handleItemClick} />
    </div>
  );
};

export default App;
