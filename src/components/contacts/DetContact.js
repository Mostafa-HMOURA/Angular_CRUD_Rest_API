import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

const DetContact = () => {

  const {id} = useParams();

  return (
    
    <div className="container mt-4">
        <div className="card" style={{width: '70rem', textAlign: 'center'}}>
            <div className="card-header">
                User ID : {id}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Name : {}</li>
                <li className="list-group-item">Email : {}</li>
                <li className="list-group-item">Phone : {}</li>
            </ul>
        </div>
    </div>

  )
}

export default DetContact