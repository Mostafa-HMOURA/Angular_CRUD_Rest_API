import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

  const {id} = useParams();

  return (
    <div>
      <h1>About Page {id}</h1>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illum explicabo nostrum ea at facilis laborum vero officiis, aspernatur dignissimos.
        </h2>
    </div>
  )
}

export default About;