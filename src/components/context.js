import React, { Component } from 'react';
import {axios} from 'axios';

const Context = React.createContext();

const Reducer = (state,action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((con) => con.id !== action.payload)
            };
        
        case 'ADD_CONTACT':
            return {
                    contacts: [action.payload, ...state.contacts]
                };
        
        case 'UPDATE_CONTACT':
            return {
                    contacts: state
                        .contacts
                        .map(
                            contact => contact.id === action.payload.id 
                                ? contact = action.payload : contact
                        )
                };

        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        contacts : [
            {id: 1,name: "Mostafa HMOURA",tel:"0611010114",email: "mos@gmail.com"},
            {id: 2,name: "Mostafa lbenj",tel:"0611010114",email: "mos@gmail.com"},
            {id: 3,name: "Mostafa MH",tel:"0611010114",email: "mos@gmail.com"},
            {id: 4,name: "Mostafa TOTO",tel:"0611010114",email: "mos@gmail.com"}
        ],
        dispatch: action => this.setState(state => Reducer(state,action))
    }
    

    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => this.setState({
                contacts: res
            }))
            .catch(err => console.log(err))
    }
  
    render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}


export const Consumer = Context.Consumer;