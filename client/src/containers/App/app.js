import React, { Component } from 'react'
import styles from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import Main from './main'
// import Sidebar from '../../components/Sidebar/Sidebar.js'
// import Signup from '../../components/LoginSignup/LoginSignup.js'
// import LinearSearch from "../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearch";
// import BinarySearch from "../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearch";
// import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
// import DynamicProgramming from "../../components/Algorithms/dynamicProgramming/DynamicProgramming";
// import BackTracking from "../../components/Algorithms/backTracking/BackTracking";
// import Practice from '../../components/Practice/Practice'
import Layout from '../../hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
