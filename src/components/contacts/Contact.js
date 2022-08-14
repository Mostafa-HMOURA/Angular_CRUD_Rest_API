import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import {Consumer} from '../context';
import {Link} from 'react-router-dom';


class Contact extends Component {

  state = {
    showContactToggle: true
  }

  showContact() {
    this.setState({
      showContactToggle: !this.state.showContactToggle
    });
  }

  onDeleteCLick = (id,dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'DELETE',
      })
      .then(res => dispatch({
      type: 'DELETE_CONTACT',
      payload: id
      }))
      .catch(err => console.log(err))

  }

  render() {
    const {id,name,phone,email} = this.props.data;

    return(
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {name}&nbsp; 
                      <i onClick={this.showContact.bind(this)} 
                        className="fa fa-sort-down"
                        style={{color : 'green', cursor:'pointer'}}>
                      </i>
                      <i style={{color : 'red', 
                                float: 'right',
                                cursor:'pointer',
                                marginLeft: '8px'
                              }} 
                          className="fa fa-times" aria-hidden="true"
                          onClick={this.onDeleteCLick.bind(this,id,dispatch)}>
                      </i>
                      <Link to={`/ContactEdit/${id}`}>
                        <i className='fa fa-pencil' style = {{
                          color: 'orange',
                          float: 'right',
                          cursor: 'pointer',
                          marginLeft: '8px'
                        }}>
                        </i>
                      </Link>
                      <Link to={`/ContactDetails/${id}`}>
                        <i className='fa fa-eye' style = {{
                          color: 'blue',
                          float: 'right',
                          cursor: 'pointer',
                          marginLeft: '8px'
                        }}>
                        </i>
                      </Link>
                  </h4>
                  <p className="card-text">
                    {(this.state.showContactToggle) ? (
                    <ul className="list-group">
                      <li className="list-group-item">ID : {id}</li>
                      <li className="list-group-item">{phone}</li>
                      <li className="list-group-item">{email}</li>
                    </ul>
                    ) : null }
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  data: PropTypes.object.isRequired
}

export default Contact;
