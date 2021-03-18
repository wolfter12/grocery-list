import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Entry from '../Entry';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { RAN_OUT, HAVE, ALL } from '../../configs/constants';

function GroceryList() {
  const [filterParam, setFilterParam] = useState(ALL);

  const list = useSelector((state) => state.list);

  const listItems = list
    .filter(({ statusHistory }) => {
      if (filterParam === ALL) {
        return true;
      }
      return statusHistory[0].status === filterParam;
    })
    .sort((a, b) => {
      const priorityCompare = a.priority - b.priority;
      if (priorityCompare === 0) {
        return a.name.localeCompare(b.name);
      }
      return priorityCompare;
    })
    .map((entry) => <Entry key={entry.id} entry={entry} />);

  const onFilterSelect = (e) => {
    console.log(e);
    setFilterParam(e);
  };
  return (
    <div>
      <DropdownButton
        variant="outline-secondary"
        title="Filter"
        id="input-group-dropdown-filter"
        onSelect={onFilterSelect}
        className="mb-2"
      >
        <Dropdown.Item eventKey={RAN_OUT}>{RAN_OUT}</Dropdown.Item>
        <Dropdown.Item eventKey={HAVE}>{HAVE}</Dropdown.Item>
        <Dropdown.Item eventKey={ALL}>{ALL}</Dropdown.Item>
      </DropdownButton>
      {listItems}
    </div>
  );
}

export default GroceryList;
