import React, { Component } from 'react';
import Board from './Board'

export default class Square extends Component {
        clickSquare = () =>{
            const { index } = this.props
            this.props.clickSquare(index)
        }

        render(){
        const { value, index } = this.props
        return(
            <div>
                <div id= "displaySquare" onClick = {this.clickSquare}>
                {value}
                </div>



            </div>
            )
        }
    }
