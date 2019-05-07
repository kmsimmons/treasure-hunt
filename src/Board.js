//Logic with state and array of 9 0's
import React, { Component } from 'react';
import Square from './square'

export default class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                spaces: [],
                treasure: 2,
                bomb: 1
            }
    }

    startGame = () =>{
        this.setState({
            spaces: ['?','?','?','?','?','?','?','?','?'],
            treasure: this.setTreasure(),
            bomb: this.setTreasure(),
        })
    }

//put a 1 in a random square when page is refreshed
    setTreasure = () => {
        let { spaces, treasure, bomb } = this.state
        let num = Math.floor(Math.random()* spaces.length)
        // return num


        //
        let newArr = spaces.splice(num, 1, 1)
        //
        // spaces[num] = 1
        // spaces[bomb] = 2
        //     console.log(num);
        this.setState({spaces: newArr})
        // console.log({spaces});


}
//if we hit the 1, 'you win', else you lose
    clickSquare = (spacesIndex) => {
        let { spaces, treasure, bomb} = this.state
        if (spacesIndex === bomb){
            spaces[spacesIndex] = 'Boom!'
        }else if(spacesIndex === treasure){
            spaces[spacesIndex] = 'Treasure!'
        } else {
            spaces[spacesIndex] = 'Tree'
        }

        this.setState({spacesIndex})

    }
    setTreasure = () =>{
        const { index } = this.props
        this.props.setTreasure(index)
    }
//use map function to put new values into array of 9

        render(){
            let {spaces} = this.state

            let newSquare = spaces.map((value, index) => {
            return (<Square
            clickSquare = {this.clickSquare}
        
            value = {value}
            index = {index}/>)

            })

            return(
                <div id= 'displayBoard'>
                {newSquare}
                {this.setTreasure}

                </div>
            )

        }

}
