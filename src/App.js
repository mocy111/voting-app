import React , { Component } from 'react';
import List from './list'
import {Paper } from '@material-ui/core'

import './App.css';
import Child from './child';

class App extends Component {

    state ={
      player: []
       
    }

    componentDidMount() {
      this.setState({
        player:List
      })
     
    }
    addOne = (playerId) =>{
      const votePlayer = this.state.player.map((param)=>{
          if (playerId === param.id){
            return Object.assign({},param, {
              votes:param.votes +1
            })
           

          }
          else {
            return param
          }
      })
      this.setState({
        player:votePlayer
      })
    }

    
    

  render() {
    console.log(this.state.player);
const trier = this.state.player.sort((a,b)=>
    b.votes - a.votes
)
      

    return (
      <React.Fragment>
        
        
     
       
<div className="ui unstackable items"> 
      
      {
          trier.map((param) =>{
            return (
              <Paper elevation={3} >
              <div key={param.id}>
                
               <Child 
               id ={param.id}
               name = {param.name} 
               votes={param.votes}
               liste ={this.state}
               imgUrl ={param.imageUrl}
               votePlayer= {this.addOne}
               
               />
              </div>
              </Paper>
            )
            

          })
      }
           
       </div>
       
     
      </React.Fragment>
      
    )
  }
}

export default App
