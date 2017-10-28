import React, { Component } from 'react';

export default class Star extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        console.log('iam getting called');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toString()}</h1>
            </div>
        );
    }
}