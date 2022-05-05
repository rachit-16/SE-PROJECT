import React, { Component } from 'react'
import WordSearch from '../../components/Algorithms/WordSearchVisualiser/WordSearch'
import Auxillary from '../Auxiliary/Auxillary'
import Practice from '../../components/Practice/Practice'
// import About from '../../components/About/About'
import WordSearchAboutPage from '../../components/Algorithms/WordSearchVisualiser/wordSearchAbout'
import BackTrackingAboutPage from '../../components/Algorithms/backTracking/backTrackingAbout'
import DynamicProgrammingAboutPage from '../../components/Algorithms/dynamicProgramming/DPAbout'
import SearchingAlgorithmsAboutPage from '../../components/Algorithms/searchingAlgorithms/searchingAlgorithmsAbout'
import BinarySearch from '../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearch'
import LinearSearch from '../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearch'
import Nqueen from '../../components/Algorithms/nQueensProblem/nQueensProblem'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    //To handle Practice section
    showPractice: false
  }

  showPracticeToggleHandler = () => {
    console.log('clicked')
    this.setState((prevState) => {
      return {
        showPractice: !prevState.showPractice
      }
    })
    console.log(this.state)
  }
  render() {
    let comp = null
    console.log(this.props)
    if (this.props.visualizer === 'backtracking') {
      comp = (
        <WordSearch
          clicked={this.showPracticeToggleHandler}
          show={this.state.showPractice}
        />
      )
    } else if (this.props.visualizer === 'binarySearch') {
      console.log('binarylayout')
      comp = (
        <BinarySearch
          clicked={this.showPracticeToggleHandler}
          show={this.state.showPractice}
        />
      )
    } else if (this.props.visualizer === 'linearSearch') {
      comp = (
        <LinearSearch
          clicked={this.showPracticeToggleHandler}
          show={this.state.showPractice}
        />
      )
    } else if (this.props.visualizer === 'nqueen') {
      comp = (
        <Nqueen
          clicked={this.showPracticeToggleHandler}
          show={this.state.showPractice}
        />
      )
    }

    return (
      <Auxillary>
        {/* <WordSearch clicked={this.showPracticeToggleHandler} /> */}
        {/*  */}
        {/* <About /> */}
        {/* <WordSearchAboutPage /> */}
        {/* <BackTrackingAboutPage /> */}
        {/* <DynamicProgrammingAboutPage /> */}
        {comp}
        {/* <Practice show={this.state.showPractice} /> */}
      </Auxillary>
    )
  }
}
export default Layout
