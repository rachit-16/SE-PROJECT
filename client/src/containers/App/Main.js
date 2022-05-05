import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Posts from '../../components/Posts/Posts'
import Questions from '../../components/Questions/Questions'
import about from '../../components/About/About'
import LoginSignup from '../../components/LoginSignup/LoginSignup'
import SearchingAbout from '../../components/Algorithms/searchingAlgorithms/searchingAlgorithmsAbout'
import BacktrackingAbout from '../../components/Algorithms/WordSearchVisualiser/wordSearchAbout'
import DpAbout from '../../components/Algorithms/dynamicProgramming/DPAbout'
import BinarySearchLayout from '../../components/Algorithms/searchingAlgorithms/BinarySearch/BinarySearchLayout'
import LinearSearchLayout from '../../components/Algorithms/searchingAlgorithms/LinearSearch/LinearSearchLayout'
import WordSearchLayout from '../../components/Algorithms/WordSearchVisualiser/BacktrackingLayout'
import Nqueen from '../../components/Algorithms/nQueensProblem/NqueenLayout'
import Contact from '../../components/Contact/Contact'
const main = (props) => {
  return (
    <>
      <Route path="/" exact component={LoginSignup} />
      <Route path="/contact" exact component={Contact} />

      {/* <Route path="/" exact component={Questions} /> */}
      {/* ---------------CHANGE THIS ROUTE FOR POSTS---------------- */}
      <Route path="/posts" exact component={Posts} />
      <Route
        exact
        path="/searching/problems"
        render={() => <Questions topic="searching" />}
      />
      <Route
        exact
        path="/dfs/problems"
        render={() => <Questions topic="dfs" />}
      />
      <Route
        exact
        path="/dp/problems"
        render={() => <Questions topic="dp" />}
      />
      <Route path="/about" exact component={about} />
      <Route path="/searching" exact component={SearchingAbout} />
      <Route path="/backtracking" exact component={BacktrackingAbout} />
      <Route path="/dp" exact component={DpAbout} />
      <Route
        path="/searching/BinarySearch"
        exact
        component={BinarySearchLayout}
      />
      <Route
        path="/searching/LinearSearch"
        exact
        component={LinearSearchLayout}
      />
      <Route
        path="/backtracking/WordSearch"
        exact
        component={WordSearchLayout}
      />
      <Route path="/backtracking/NQueen" exact component={Nqueen} />

      {/* <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>

        <Route path="/signup" exact component={signup}/>
        <Route path="/signup" exact component={signup}/>
    */}
    </>
  )
}
export default main
