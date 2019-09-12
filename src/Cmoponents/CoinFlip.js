import React, { Component } from 'react'
import '../App.css';
import img1 from "../images/head.jpg"
import img2 from "../images/tail.jpg"
import Flip from './Flip';

export class CoinFlip extends Component {
    // state = {
    //     img: "",
    //     name: ""
    // }
    constructor(props){
        super(props);
        this.state = {img:"" , name:"", counterH:0, counterT:0 };
    }
    handleClick = (e) => {
        // console.log(this.state);\
        const res = Math.floor(Math.random()*2);
        var counter = 0;
        if (res === 0) {
            counter = this.state.counterH+1;
            this.setState({
                img: img1,
                name: "It's a HEAD",
                counterH: counter
            })
        }else{
            counter = this.state.counterT+1;
            this.setState({
                img: img2,
                name: "It's a TAIL",
                counterT: counter
            })
        }
    }
    render() {
        return (
            <div>
                <div className='head'>
                    <h1>COIN FLIP APP</h1>
                    <br/><br/><br/><br/>
                    <Flip img={this.state.img} name={this.state.name} counterH={this.state.counterH} counterT={this.state.counterT}/>
                    {/* <Flip bundle={this.state}/> */}
                    {/* <Object counterH={this.state.counterH} /> */}
                        <button className="button button4" onClick={this.handleClick}>FLIP</button>
                    
                </div>
            </div>
            
        )
    }
}

export default CoinFlip
