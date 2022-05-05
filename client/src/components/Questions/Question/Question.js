import React from 'react'
import axios from 'axios'

import styles from './Question.module.css'

const question = (props) => {
  const redirectQues = (contestID, index) => {
    console.log(contestID)
    window.open(
      `https://codeforces.com/problemset/problem/${contestID}/${index}`
    )
  }

  return (
    <div
      className={styles.Question}
      onClick={() => redirectQues(props.contestId, props.index)}
    >
      <h5 className={styles.quesTitle}>{props.name}</h5>
      <p className={styles.quesRating}>Rating: {props.rating}</p>
      <p className={styles.quesTags}>{props.tags.join(', ')}</p>
    </div>
  )
}

export default question
