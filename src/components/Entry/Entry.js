import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../../actions/listActions';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
        <Button variant="secondary" onClick={onRemoveHandler}>
          Remove
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Entry;
