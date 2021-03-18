import React from 'react';
import { useSelector } from 'react-redux';
import Entry from '../Entry';

function GroceryList() {
  const list = useSelector((state) => state.list);
  const listItems = list.map((entry) => <Entry key={entry.id} entry={entry} />);
  return <div>{listItems}</div>;
}

export default GroceryList;
