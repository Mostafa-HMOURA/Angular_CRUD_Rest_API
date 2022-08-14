import React, { Component } from 'react'
import { Consumer } from '../context'
import TextInputGroup from '../helpers/TextInputGroup'

export class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    }

    async componentDidMount(){
        //const id = this.props.match.params.id;
        //console.log(id)
        const id = 10;
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(res => this.setState({
                name: res.name,
                email: res.email,
                phone: res.phone
            }))
            .catch(err => console.log(err))
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

        const id = 10;

        const upContact = {
            name: name,
            email: email,
            phone: phone
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(upContact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => dispatch({
                type: "UPDATE_CONTACT",
                payload: json
            }))

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

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
                                <h4 className="card-title">Edit Contact :</h4>
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
                                        <button className="btn btn-danger">Update Contact</button>
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

export default EditContact