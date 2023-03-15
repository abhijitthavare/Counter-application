import React, { Component } from 'react'
import "./global.css"
export default class App extends Component 
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    handelincrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handeldecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handelreset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='mainblock'>
        <h1>{this.state.count}</h1>
        <div className='childblock'>
        <button onClick={this.handelincrement}>+INCREMENT</button>
        <button onClick={this.handeldecrement}>-DECREMENT</button>
        <button onClick={this.handelreset}>RESET</button>
        </div>
      </div>
    )
  }
}

