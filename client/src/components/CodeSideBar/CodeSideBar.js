import React from 'react'
import Editor from '../Editor/Editor'
import styles from './CodeSideBar.module.css'

const codeSideBar = (props) => {
  //console.log(code)
  console.log('props-', props)

  return (
    <div className={styles.Sidebar}>
      <h2>CODE</h2>
      <div className={styles.Editor}>
        <Editor
          mode="c_cpp"
          height="480px"
          width="450px"
          code={props.code}
          readOnly
        />
      </div>
      <button className={styles.Button} onClick={props.clicked}>
        Customize!
      </button>
    </div>
  )
}

export default codeSideBar
