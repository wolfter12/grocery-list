import React from 'react';
import AddEntry from '../AddEntry';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GroceryList from '../GroceryList/GroceryList';

function App() {
  return (
    <Container>
      <h1>Grocery List</h1>
      <AddEntry />
      <GroceryList />
    </Container>
  );
}

export default App;
