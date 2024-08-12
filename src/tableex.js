import React, { useState } from 'react';
import Table from './Table';

const Tableex = () => {
  const initialData = [
    { name: 'John Doe', age: 28, city: 'New York' },
    { name: 'Jane Doe', age: 22, city: 'San Francisco' },
    { name: 'Sam Smith', age: 32, city: 'Chicago' },
  ];

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>User Information</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Table data={filteredData} />
    </div>
  );
};

export default Tableex;
