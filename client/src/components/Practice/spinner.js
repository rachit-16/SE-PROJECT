import react from 'react'
import styles from './Spinner.module.css'
const spinner=()=>{
return(
<div className={styles.spinner}>
  <div className={styles.bounce1}></div>
  <div className={styles.bounce2}></div>
  <div className={styles.bounce3}></div>
</div>
)

}
export default spinner