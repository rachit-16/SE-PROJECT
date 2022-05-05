import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import {
  FaLinkedinIn,
  FaKey,
  FaUser,
  FaFacebookF,
  FaGoogle,
  FaEnvelope
} from 'react-icons/fa'
import axios from 'axios'
import styles from './LoginSignup.module.css'
import PostSpinner from '../Spinner/Spinner'
class Form extends Component {
  state = { spinner: false }
  componentDidMount() {
    const signUpButton = document.getElementById('signUp')
    const signInButton = document.getElementById('signIn')
    const container = document.getElementById('container')

    signUpButton.addEventListener('click', () => {
      container.classList.add(`${styles['right-panel-active']}`)
    })
    signInButton.addEventListener('click', () => {
      container.classList.remove(`${styles['right-panel-active']}`)
    })
  }

  loginHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
   this.setState({ spinner:true})
    axios
      .post('https://code-play-apis.herokuapp.com/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('login response:::', response.data)
        this.setState({submit:false})
        if(response.data.message!=='Login succesful' )
        {
          return alert("Unable to login. Please try again")
        }
        localStorage.setItem('loginToken', `${response.data.token}`)
        
        window.location = '/posts'
      })
      .catch((error) => {
        console.log('login error:::', error)
      })
  }

  signupHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log('form data:::', formData)
     this.setState({spinner:true})
    axios
      .post('https://code-play-apis.herokuapp.com/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('signup response:::', response.data)
        this.setState({spinner:false})
        if(response.data.message!=='userCreated')
        {
          return alert('Unable to sign up. Please try again')
        }
        localStorage.setItem('loginToken', `${response.data.token}`)
        window.location = '/posts'
      })
      .catch((error) => {
        console.log('signup error:::', error)
      })
  }

  render() {
    return (
      <div className={styles.formPage}>
        {this.state.spinner?<PostSpinner/>:<div className={styles.container} id="container">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div
              className={[
                styles['form-container'],
                styles['sign-up-container']
              ].join(' ')}
            >
              <form onSubmit={(e) => this.signupHandler(e)}>
                <h1>Create Account</h1>
                <div className={styles['social-container']}>
                  <a href="/" className={styles.social}>
                    <FaFacebookF />
                  </a>
                  <a href="/" className={styles.social}>
                    <FaGoogle />
                  </a>
                  <a href="/" className={styles.social}>
                    <FaLinkedinIn />
                  </a>
                </div>
                <span>or use your email for registration</span>
                <div className={styles.username}>
                  <FaUser />
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className={styles.email}>
                  <FaEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={styles.password}>
                  <FaKey />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button>Sign Up</button>
              </form>
            </div>
            <div
              className={[
                styles['form-container'],
                styles['sign-in-container']
              ].join(' ')}
            >
              <form onSubmit={(e) => this.loginHandler(e)}>
                <h1>Sign In</h1>
                <div className={styles['social-container']}>
                  <a href="/" className={styles.social}>
                    <FaFacebookF />
                  </a>
                  <a href="/" className={styles.social}>
                    <FaGoogle />
                  </a>
                  <a href="/" className={styles.social}>
                    <FaLinkedinIn />
                  </a>
                </div>
                <span>or use your account</span>
                <div className={styles.email}>
                  <FaEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={styles.password}>
                  <FaKey />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <a href="/">Forgot Your Password?</a>

                <button>Sign In</button>
              </form>
            </div>
            <div className={styles['overlay-container']}>
              <div className={styles.overlay}>
                <div
                  className={[
                    styles['overlay-panel'],
                    styles['overlay-left']
                  ].join(' ')}
                >
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button className={styles.ghost} id="signIn">
                    Sign In
                  </button>
                </div>
                <div
                  className={[
                    styles['overlay-panel'],
                    styles['overlay-right']
                  ].join(' ')}
                >
                  <h1>Hello, Friend!</h1>
                  <p>Enter your details and start journey with us</p>
                  <button className={styles.ghost} id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>}
        
      </div>
    )
  }
}

export default Form
