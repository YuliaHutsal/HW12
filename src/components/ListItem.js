import React, { Component } from 'react'

export default class ListItem extends Component {
    shouldComponentUpdate(nextProps, nextState){

    return this.props.items.length !== nextProps.items.lenght;
  }
  render(){
    return(
        <ul>
            {this.props.items.map(i=><li key={i.id}>{i.value}</li>)}
        </ul>
    )
  }
}
