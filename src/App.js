import React from "react"
import axios from 'axios';
import "./App.css"
export default class App extends React.Component {
  state = {
    dom: []
  }
    componentDidMount() {
    axios.get(`http://localhost:3001/table1`)
      .then(res => {
        const dom = res.data;
        this.setState({ dom });
      })
  };
  render() {
    console.log(this.state.dom)
  return (
    <div className="App">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.dom.map((item , i )=>
        {
        return(
          <tr key={i}>
            <td>{item.Fristname}</td>
            <td>{item.LastName}</td>

          </tr>
        )
        })
      }
    </tbody>
  </table>
    </div>
  );
}
}

