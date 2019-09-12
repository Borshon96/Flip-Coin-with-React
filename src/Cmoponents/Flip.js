import React, { Component } from 'react'
import '../App.css';
// import img1 from "../images/head.jpg"

export class Flip extends Component {
   
    render() {
        return (
            <div className='coin'>
                <img src={this.props.img} alt="head"/>
                <br/>
                <h2>{this.props.name}</h2>
                <h3>HEADS: {this.props.counterH}</h3>
                <h3>TAILS: {this.props.counterT}</h3>
            </div>
        )
    }
}

export default Flip
