// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css';

import styles from './Dropdown.module.css'

const Dropdownn = (props) => {
  const selectVisualizer = () => {
    const select = document.getElementById('select').value
    if (select === 'BinarySearch' || select === 'LinearSearch') {
      window.location = `/searching/${select}`
    } else {
      window.location = `/backtracking/${select}`
    }
  }
  console.log(props)
  return (
    <div>
      <select
        id="select"
        onChange={selectVisualizer}
        className={styles.Dropdown}
      >
        <option hidden value="Select the Visualizer">
          Select the Visualizer
        </option>
        <option className={styles.option} value={props.visual1}>
          {props.visual1}
        </option>
        <option className={styles.option} value={props.visual2}>
          {props.visual2}
        </option>
      </select>
    </div>
  )
}
export default Dropdownn
