import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../../actions/listActions';
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
} from 'react-bootstrap';
import { RAN_OUT, HAVE } from '../../configs/constants';

function AddEntry() {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('1');
  const [status, setStatus] = useState(RAN_OUT);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onButtonClickHandler = () => {
    dispatch(addEntry(name, status, priority));
  };

  const onStatusHandler = (e) => {
    setStatus(e);
  };

  const onPriorityHandler = (e) => {
    setPriority(e);
  };
  return (
    <div>
      <InputGroup className="mb-3" value={name} onChange={onChangeHandler}>
        <FormControl
          placeholder="Item name"
          aria-label="Item name"
          aria-describedby="item name"
        />
        <DropdownButton
          variant="outline-secondary"
          title="Status"
          id="input-group-dropdown-status"
          onSelect={onStatusHandler}
        >
          <Dropdown.Item eventKey={RAN_OUT}>{RAN_OUT}</Dropdown.Item>
          <Dropdown.Item eventKey={HAVE}>{HAVE}</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          variant="outline-secondary"
          title="Priority"
          id="input-group-dropdown-priority"
          onSelect={onPriorityHandler}
        >
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="3">3</Dropdown.Item>
          <Dropdown.Item eventKey="4">4</Dropdown.Item>
          <Dropdown.Item eventKey="5">5</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={onButtonClickHandler}>
            Add item
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default AddEntry;
