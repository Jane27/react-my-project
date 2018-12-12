import React, {Component} from 'react'

class DigitalClock extends Component {
    constructor(props){
        super()
        this.state= {
            date:new Date(),
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            // console.log(this.state.date)
            this.setState = ({
                date: new Date()
            })
        },1000)
        console.log(this.state.date)
    }

    componentDidUpdate(currentProps, currentState){
        console.log(currentState)

    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div className='digital-clock-component jumbotron'>
            <h1>{this.state.date.toLocaleTimeString()}</h1>

            </div>

        )
    }
}

export default DigitalClock;