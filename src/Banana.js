import * as React from "react";

export default class Banana extends React.Component {

    constructor(props) {
        super(props);
        //this.step = props.step ?? 1;
        //this.step = props.step ? props.step : 1 ;
        this.state = {
            n: props.start,
            step: props.step ?? 1,
            timer: null,
        };

        this.increment = this.increment.bind(this);
        this.setIncrement = this.setIncrement.bind(this);
    }

    componentDidMount() {
        this.play();
    }

    componentWillUnmount() {
        window.clearInterval(this.state.timer);
    }

    increment() {
        this.setState(function (state, props) {
            return {n: state.n + state.step}
        });
    }

    setIncrement(e) {
        e.preventDefault();
        this.setState(function (state, props) {
            return {step: state.step + 1}
        });
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null
        });
    }

    play() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer : window.setInterval(this.increment, 1000)
        });
    }

    render() {
        return <div>
            step: {this.state.step}
            <button onClick={this.setIncrement}>+</button>
            {this.state.timer ?
                <button onClick={this.pause.bind(this)}>Pause</button> :
                <button onClick={this.play.bind(this)}>Play</button>
            }
            <p>timer : {this.state.n}</p>

        </div>
    }

}

Banana.defaultProps = {}

