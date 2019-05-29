import React from 'react';
import './App.css';

function TableRow(props) {
  return (
    <tr>
      <td>Sample</td>
      <td>Sample</td>
      <td>Sample</td>
    </tr>
  )
}

function Table(props) {
    return (
      <div className = "table-wrapper">
        <h1> {props.name} </h1>
        <h3>Total = {props.total}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Sum(BTC)</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    );
}

function App() {
  return (
    <div className="wrapper">
      <Table name="Selling BTC" total="25000 BTC"/>
      <Table name="Buying BTC" total="0.01555923 BTC"/>
    </div>
  );
}

export default App;
