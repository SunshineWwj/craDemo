import React, { Component } from 'react'
import './style.css'
export default class Toast extends Component {

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
   state={
    text:''
   }
   setOpts=(opts)=>{
    this.setState({
        text:opts.text
    })
   }
    render() {
        const {text}=this.state
        return (
            <div className='my_autotoast'>
                {text}
            </div>
        )
    }
}
