import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function TableRow() {
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
          <h1> { props.name } </h1>
          <h3>Total = { props.total }</h3>
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
        name: ["Buying BTC", "Selling BTC"],
        total: ["25000 AUD", "0.01555923 BTC"]
      };
      this.swap = this.swap.bind(this);
    }

    swap() {
        this.setState({
            name: [this.state.name[1], this.state.name[0]],
            total: [this.state.total[1], this.state.total[0]]
            });
    }
    render() {
  
      return (
        <div className="wrapper">
          <div className="container">
            <div id="table1" className="table1">
              <Table name={this.state.name[0]} total={this.state.total[0]} class="buy" />
            </div>
            <div className="table2">
              <Table name={this.state.name[1]} total={this.state.total[1]} class="sell" />
            </div>
          </div>
          <button className="switch" onClick={this.swap} >
            Switch          
          </button>
        </div>
        );
      }
    }
  
  export default App;
  

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
