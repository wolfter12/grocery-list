import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry, changeStatus } from '../../actions/listActions';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { RAN_OUT, HAVE } from '../../configs/constants';

function Entry({ entry: { id, name, statusHistory, priority } }) {
  const statusHistoryList = statusHistory.map(({ status, timeStamp }) => (
    <ListGroup.Item key={timeStamp}>
      {timeStamp} : {status}
    </ListGroup.Item>
  ));
  const dispatch = useDispatch();
  const onRemoveHandler = () => {
    dispatch(deleteEntry(id));
  };
  const onChangeStatusHandler = (e) => {
    dispatch(changeStatus(id, e));
  };
  return (
    <Card className="mb-2">
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted" key="status">
          Current status: {statusHistory[0].status}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" key="status">
          Status history:
          <ListGroup variant="flush">{statusHistoryList}</ListGroup>
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted" key="priority">
          Priority: {priority}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer className="text-muted">
        <DropdownButton
          variant="outline-secondary"
          title="Change status"
          id="input-group-dropdown-change-status"
          onSelect={onChangeStatusHandler}
          className="mb-2"
        >
          <Dropdown.Item eventKey={RAN_OUT}>{RAN_OUT}</Dropdown.Item>
          <Dropdown.Item eventKey={HAVE}>{HAVE}</Dropdown.Item>
        </DropdownButton>
        <Button variant="secondary" onClick={onRemoveHandler}>
          Remove
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Entry;
