import React, { Component } from 'react';
import './App.css';
import {Cards, Chart, CountryPicker } from './components'
import {fetchData} from './Api'
import image from './maxresdefault.jpg'

class App extends Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount(){
    const getData = await fetchData()
    this.setState({data: getData})
    // console.log(data)
  }

  handleCountryChange = async ( country ) => {
    const getData = await fetchData(country)
    this.setState({data: getData, country: country })
    console.log(getData)
    // fetch the data
    // set the country
  }
  render(){
    const {data, country} = this.state
    return (

      <div className="App">
        <div className="image"><img src={image}/></div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={country=>this.handleCountryChange(country)} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
