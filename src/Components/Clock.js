import React from 'react';
import './ClockStyle.css';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            time : new Date()
        }
    }

    componentDidMount(){
        setInterval(this.update,1000)
    }

    update = () => {
        this.setState({
            time : new Date()
        })
    };

    render(){
        const h = this.state.time.getHours();
        const m = this.state.time.getMinutes();
        const s = this.state.time.getSeconds();

        return(
            <span className="MyClock">{h} : {m} : {s}</span>
        )
    }
}

export default Clock;