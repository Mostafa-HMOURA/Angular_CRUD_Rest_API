import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGroup from '../helpers/TextInputGroup';
import {useNavigate} from 'react-router-dom'

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    }
    
    onChangeInput = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    
    submit = (dispatch,size,e) =>{
        e.preventDefault();
        
        const {name,email,phone} = this.state;

        if(name == "") {
            this.setState({
                errors: {
                    name: "The Name is Required"
                }
            })
            return;
        }

        if(email == "") {
            this.setState({
                errors: {
                    email: "The Email is Required"
                }
            })
            return;
        }

        if(phone == "") {
            this.setState({
                errors: {
                    phone: "The Phone is Required"
                }
            })
            return;
        }

        const newContact = {
            name: name,
            email: email,
            phone: phone
        }

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => dispatch({
                type: "ADD_CONTACT",
                payload: json
            }))

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        let navigate = useNavigate();
        navigate('/')

    }

  render() {
    const {name,email,phone,errors} = this.state;

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                <div>
                    <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add Contact :</h4>
                                <div className="card-text">
                                    <TextInputGroup
                                       label="Name :"
                                       name="name"
                                       value={name}
                                       type="text"
                                       onChange={this.onChangeInput}
                                       error={errors.name}  
                                    />
                                    <TextInputGroup
                                       label="Email :"
                                       name="email"
                                       value={email}
                                       type="email"
                                       onChange={this.onChangeInput}
                                       error={errors.email}    
                                    />
                                    <TextInputGroup
                                       label="Phone :"
                                       name="phone"
                                       value={phone}
                                       type="text"
                                       onChange={this.onChangeInput}
                                       error={errors.phone}    
                                    />
                                    <div className="d-grid gap-2 mt-3">
                                        <button className="btn btn-success">Add new Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                )

            }}
        </Consumer>
    )
  }
}


export default AddContact;
