// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimeRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startbtn = () => {
    const {isTimeRunning} = this.state
    if (!isTimeRunning) {
      this.timerId = setInterval(() => {
        this.setState(prevs => ({timer: prevs.timer + 1}))
      }, 1000)
      this.setState({isTimeRunning: true})
    }
  }

  stopbtn = () => {
    clearInterval(this.timerId)
    this.setState({isTimeRunning: false})
  }

  resetbtn = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0, isTimeRunning: false})
  }

  render() {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return (
      <div className="bg-container">
        <div>
          <h1 className="h">Stopwatch</h1>
          <div className="container">
            <div className="time-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>
              {formattedMinutes}:{formattedSeconds}
            </h1>
            <div>
              <button className="green" type="button" onClick={this.startbtn}>
                start
              </button>
              <button className="red" type="button" onClick={this.stopbtn}>
                Stop
              </button>
              <button className="yellow" type="button" onClick={this.resetbtn}>
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
