import React from 'react';
import './App.css';

function TableRow(props) {
  return (
    <tr>
      <td>Sample</td>
      <td>Sample</td>
      <td className="last">Sample</td>
    </tr>
  )
}

function Table(props) {
    return (
      <div className = { props.class }>
        <h1> {props.name} </h1>
        <h3>Total = {props.total}</h3>
        <table>
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["Buying BTC", "Selling BTC"]
    };
  }
  render() {

    return (
      <div className="wrapper">
        <div className="container">
          <div id="table1" className="table1">
            <Table name={this.state.name[0]} total="25000 AUD" class="buy" />
          </div>
          <div className="table2">
            <Table name={this.state.name[1]} total="0.01555923 BTC" class="sell" />
          </div>
        </div>
        <button className="switch" >
          Switch          
        </button>
      </div>
      );
    }
  }

export default App;
