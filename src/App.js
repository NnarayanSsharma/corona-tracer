import React, { Component } from 'react';
import './App.css';
import {Cards, Chart, CountryPicker } from './components'
import {fetchData} from './Api'

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount(){
    const getData = await fetchData()
    this.setState({data: getData})
    // console.log(data)
  }
  render(){
    const {data} = this.state
    return (

      <div className="App">
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
