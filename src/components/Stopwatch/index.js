import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimeRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  startTimer = () => {
    const {isTimeRunning} = this.state
    if (!isTimeRunning) {
      this.timerId = setInterval(() => {
        this.setState(prev => ({timer: prev.timer + 1}))
      }, 1000)
      this.setState({isTimeRunning: true})
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimeRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0, isTimeRunning: false})
  }

  render() {
    const {timer, isTimeRunning} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return (
      <div className="bg-container">
        <div className="stopwatch-card">
          <h1 className="title">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-icon"
              />
              <p className="timer-label">Timer</p>
            </div>

            <h1 className="time-display">
              {formattedMinutes}:{formattedSeconds}
            </h1>
            <p className="status-text">
              {isTimeRunning ? 'Running...' : 'Stopped'}
            </p>

            <div className="buttons">
              <button
                className="btn green"
                type="button"
                onClick={this.startTimer}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="btn red"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                className="btn yellow"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
