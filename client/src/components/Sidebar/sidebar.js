import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const sidebar = () => {
  const openNav = () => {
    document.getElementById('mySidebar').style.width = '250px'
    document.getElementById('main').style.marginLeft = '250px'
    document.getElementById('hamburger').style.display = 'none'
  }

  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
    document.getElementById('hamburger').style.display = 'block'
  }
  const logout = () => {
    const loginToken = localStorage.getItem('loginToken')
    console.log('Logut me token-', loginToken)
    const temp = { name: 'naman' }
    axios
      .post('https://code-play-apis.herokuapp.com/logout', temp, {
        headers: {
          Authorization: `Bearer ${loginToken}`
        }
      })
      .then((response) => {
        console.log('logout response:::', response.data)
        localStorage.removeItem('loginToken')

        window.location = '/'
      })
      .catch((error) => {
        console.log('login error:::', error)
      })
  }

  return (
    <>
      <div id="mySidebar" className={styles.Sidebar}>
        <button className={styles.closebtn} onClick={closeNav}>
          x
        </button>
        <div className={styles.main}>
          <Link to="/searching">Searching</Link>
          <Link to="/backtracking">Backtracking</Link>
          <Link to="/dp">Dynamic Programming</Link>
          <Link to="/posts">Community</Link>
          <Link to="/Contact">Contact</Link>
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div id="main" className={styles.main}>
        <button id="hamburger" className={styles.openbtn} onClick={openNav}>
          ☰
        </button>
      </div>
    </>
  )
}

export default sidebar
