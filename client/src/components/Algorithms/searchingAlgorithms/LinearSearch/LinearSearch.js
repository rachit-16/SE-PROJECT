import React from 'react'
import Practice from '../../../Practice/Practice'
import { randomIntFromInterval } from '../../../utils/randomIntFromInterval.js'
import { linearSearchAnimations } from '../searchingAlgorithms'
import code from './code'
import Header from '../../../utils/Header'
import ArrayTile from '../ArrayTile'
import CodeSideBar from '../../../CodeSideBar/CodeSideBar'

// import BackBar from "../../../utils/Backbar";

// Stylesheets
import './LinearSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const NUMBER_OF_ARRAY_BARS = 15
const DEFAULT_COLOR = '#6376f1'
const FOUND_COLOR = '#28B463'
const NOT_FOUND_COLOR = '#F16388'
const ANIMATION_SPEED_SECONDS = 1

export default class LinearSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
      found: false,
      disabled: false,
      elementFoundAt: 0,
      target: null,
      msgAfterExecution: ''
    }
  }

  componentDidMount() {
    this.resetArray()
  }

  resetArray() {
    const array = []
    const prevArray = document.getElementsByClassName('l-array-bar')
    const found = false
    const disabled = false
    document.getElementById('targetVal').value = ''
    for (let idx = 0; idx < prevArray.length; idx++) {
      prevArray[idx].style.backgroundColor = DEFAULT_COLOR
      prevArray[idx].classList.remove('LgrowFind')
      prevArray[idx].classList.remove('Lhighlight')
    }
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730))
    }
    this.setState({ array, found, disabled, msgAfterExecution: '' })
  }

  linearSearch() {
    var msg = ''
    const target = document.getElementById('targetVal').value
    if (target === '') return
    const animations = linearSearchAnimations(this.state.array, target)
    console.log(animations)
    let count = 0

    for (let i = 0; i < animations.length; i++) {
      const [idx, currentEle, found] = animations[i]
      const arrayBars = document.getElementsByClassName('l-array-bar')
      const arrayBar = arrayBars[idx]
      const arrayBarStyle = arrayBar.style

      count++

      if (found) {
        msg = `${currentEle} found at index ${idx}`
        setTimeout(() => {
          this.setState({
            found: true,
            disabled: true,
            elementFoundAt: idx,
            target: currentEle
          })
          arrayBarStyle.backgroundColor = FOUND_COLOR
          arrayBar.classList.add('LgrowFind')
          arrayBar.classList.add('Lhighlight')
        }, i * ANIMATION_SPEED_SECONDS * 1000)
        break
      } else {
        msg = `${target} not found`
        setTimeout(() => {
          this.setState({
            found: false,
            disabled: true
          })
          arrayBarStyle.backgroundColor = NOT_FOUND_COLOR
          arrayBar.classList.add('LgrowFind')
        }, i * ANIMATION_SPEED_SECONDS * 1000)
      }
    }
    setTimeout(() => {
      this.setState({
        disabled: false,
        msgAfterExecution: msg
      })
    }, (count + 1) * ANIMATION_SPEED_SECONDS * 1000)
  }

  render() {
    const { array, found, disabled, msgAfterExecution } = this.state
    const LSCode = `#include<bits/stdc++.h>
using namespace std;
${code}
int main(){
  
  int arr[] = {5, 7, 9, 14, 23, 33, 40, 64, 72};
  int n = sizeof(arr)/sizeof(int);

  int idx = linearSearch(arr, n, 23);

  if(idx != -1){
    cout<<"Element found at index "<< idx;
  }
  else{
    cout<<"Element not found!";
  }

  return 0;
}`

    return (
      <div className="l-comp">
        <CodeSideBar clicked={this.props.clicked} code={code} />
        <div className="Lwidth">
          <section>
            <Header title="Linear Search" />
            <div className="container">
              <div className="Lrow">
                <div className="col-sm-1"></div>
                <div className="LControl">
                  <input
                    type="number"
                    id="targetVal"
                    className="form-control"
                    placeholder="Find Element"
                  />
                  <div className="Lbuttons">
                    <button
                      onClick={() => this.linearSearch()}
                      className="LSbutton"
                      type="button"
                      id="button-addon2"
                      disabled={disabled}
                    >
                      Search
                    </button>
                    <button
                      id="resetArray"
                      className="LSbuttondanger"
                      onClick={() => this.resetArray()}
                      type="button"
                      disabled={disabled}
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="col-sm-1 "></div>
              </div>
            </div>
            {!found ? (
              <p className="Lnot-found LgrowFind">{msgAfterExecution}</p>
            ) : null}
            <div className="container">
              {array.map((value, idx) => (
                <ArrayTile
                  type={`linearSearch`}
                  key={idx}
                  idx={idx}
                  val={value}
                />
              ))}
            </div>
          </section>
        </div>
        <div>
          <Practice show={this.props.show} code={LSCode} />
        </div>
      </div>
    )
  }
}
