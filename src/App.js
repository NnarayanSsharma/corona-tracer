import React, { Component } from 'react';
import './App.css';
import {Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import {fetchData} from './Api'

class App extends Component {
  async componentDidMount(){
    const data = await fetchData()
    console.log(data)
  }
  render(){
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
