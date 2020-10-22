import React, { Component } from 'react'

export class Child extends Component {



    render() {
        console.log(this.props);
        return (
            <div className="milieu">
            
            
    <div className="ui divided  items " >
        <div className="item">
                < div className="  image" >
                    <img  src={this.props.imgUrl} alt={this.props.name}/>
                </div>

        <div className=" middle aligned content" >
             <p className="header">{this.props.name} <i class="like icon"></i> </p> 
             <div class="meta">
                    <span class="cinema"> <i className="ne flag"></i></span>
            </div>

            <div class="extra">
                <div class="ui label">#VOTE</div>
                <div class="ui divider"></div>
            </div>
    

            <div class="ui  floated primary button"  onClick={this.props.votePlayer.bind(this,this.props.id)} >
                <i class=" large up caret icon" ></i>
                    {this.props.votes} 
            </div>
            
                           
        </div>   
              

              </div>


              
            </div>
            </div>
        )
    }
}

export default Child

