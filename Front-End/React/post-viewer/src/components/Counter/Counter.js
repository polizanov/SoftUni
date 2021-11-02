import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.reduseState = this.reduseState.bind(this);
        this.increaseState = this.increaseState.bind(this);

    }

    reduseState(){
        this.setState((prevState) => this.state = {count: prevState.count - 1})
    }

    increaseState(){
        this.setState((prevState) => this.state = {count: prevState.count + 1})
    }

    resetCounter() {
        this.setState(() => this.state = {count: 0})
    }

    render() {
        return (
            <article className="couner">
                <button onClick={this.reduseState}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increaseState}>+</button>
                <button onClick={() => this.resetCounter()}>Reset</button>
            </article>
        )
    }
}

export default Counter;