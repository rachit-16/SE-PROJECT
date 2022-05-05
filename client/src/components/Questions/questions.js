import React, { Component } from 'react'
import axios from 'axios'
import Question from './Question/Question'
import SideBar from '../Sidebar/Sidebar'
import Spinner from '../Spinner/Spinner'
import { ImSearch } from 'react-icons/im'
import PostSpinner from '../PostSpinner/postSpinner'
import styles from './Questions.module.css'

class Questions extends Component {
  state = {
    questions: []
  }

  componentDidMount() {
    axios
      .get(`https://code-play-apis.herokuapp.com/${this.props.topic}/problems`)
      .then((response) => {
        let quess = response.data.map((ques, idx) => (
          <Question key={idx} {...ques} />
        ))
        this.setState({ questions: quess })
      })
  }

  render() {
    // console.log('render state:::', this.state)
    return (
      <div className={styles.Questions}>
        <div className={styles.container}>
          <SideBar />
          <div className={styles.main}>
            <h2>Practice Section</h2>
            <div className={styles.questions}>{this.state.questions}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
