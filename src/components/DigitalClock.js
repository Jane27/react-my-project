import React, {Component} from 'react';

class DigitalClock extends Component {
    constructor(props) {
        super();
        this.state = {
            date: new Date()
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => {
            // console.log(this.state.date)
            this.setState({
                date: new Date()
            })
        },1000);
        console.log(this.state.date);
    }

    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate");
        console.log(currentState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }
    render() {
        console.log("render");
        return(
            <div className='digital-clock-component jumbotron'>
            <h1>{this.state.date.toLocaleTimeString()}</h1>

            </div>

        )
    }
}

export default DigitalClock;