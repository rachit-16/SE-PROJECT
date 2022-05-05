import React, { Component } from 'react'
import axios from 'axios'
import { IconContext } from 'react-icons'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import styles from './Post.module.css'

class Post extends Component {
  state = {
    _id: null,
    upvotedBy: [],
    downvotedBy: [],
    isUpvoted: null,
    isDownvoted: null,
    upvote: 0,
    downvote: 0
  }

  user = null

  componentDidMount() {
    // get current user
    const loginToken = localStorage.getItem('loginToken')
    // console.log('login token:::', loginToken)
    axios
      .get('https://code-play-apis.herokuapp.com/getUser', {
        headers: {
          Authorization: `Bearer ${loginToken}`
        }
      })
      .then((response) => {
        // console.log('user:::', response.data)
        this.user = response.data.user
        const { _id, upvotedBy, downvotedBy, upvote, downvote } = this.props
        let isUpvoted, isDownvoted

        const idx = upvotedBy.findIndex((user) => user === this.user)
        const idx1 = downvotedBy.findIndex((user) => user === this.user)
        isUpvoted = idx !== -1
        isDownvoted = idx1 !== -1
        // console.log('testing:::', idx, idx1, upvotedBy, downvotedBy, this.user)
        // console.log('post props mounted:::', this.props)
        this.setState(
          {
            _id,
            upvotedBy,
            downvotedBy,
            isUpvoted,
            isDownvoted,
            upvote,
            downvote
          },
          () => {
            // console.log('mounted state:::', this.state, this.user)
          }
        )
      })
      .catch((error) => {
        console.log('user error:::', error)
      })
  }

  votingHandler(id, voteMethod) {
    const loginToken = localStorage.getItem('loginToken')
    // console.log('Voting-', loginToken)
    const temp = { name: 'naman' }
    axios
      .post(`https://code-play-apis.herokuapp.com/${voteMethod}/${id}`, temp, {
        headers: {
          Authorization: `Bearer ${loginToken}`
        }
      })
      .then((response) => {
        // console.log(`${voteMethod} response:::`, response)
        const { _id, upvotedBy, downvotedBy, upvote, downvote } = response.data
        let isUpvoted, isDownvoted

        const idx = upvotedBy.findIndex((user) => user === this.user)
        const idx1 = downvotedBy.findIndex((user) => user === this.user)
        isUpvoted = idx !== -1
        isDownvoted = idx1 !== -1

        // console.log('post props voted:::', this.props)
        this.setState(
          {
            _id,
            upvotedBy,
            downvotedBy,
            isUpvoted,
            isDownvoted,
            upvote,
            downvote
          },
          () => {
            // console.log('voting state:::', this.state)
          }
        )
      })
      .catch((error) => {
        console.log('upvote error:::', error)
      })
  }

  render() {
    return (
      <div id={this.props._id} className={styles.Post}>
        <div className={styles.postBody}>
          <div className={styles.postHeader}>
            <h4 className={styles.title}>{this.props.title}</h4>
            <p className={styles.author}>- {this.props.writtenBy}</p>
          </div>
          <p className={styles.postContent}>{this.props.body}</p>
        </div>
        <div className={styles.postFooter}>
          <IconContext.Provider value={{ size: '1.3em' }}>
            <div className={styles.icons}>
              <div className={styles.upvote}>
                <FiThumbsUp
                  onClick={() => this.votingHandler(this.props._id, 'upvote')}
                  fill={this.state.isUpvoted ? '#0962de' : '#161616'}
                />
                <p className={styles.upvoteCount}>{this.state.upvote}</p>
              </div>
              <div className={styles.downvote}>
                <FiThumbsDown
                  onClick={() => this.votingHandler(this.props._id, 'downvote')}
                  fill={this.state.isDownvoted ? '#0962de' : '#161616'}
                />
                <p className={styles.downvoteCount}>{this.state.downvote}</p>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    )
  }
}

export default Post
