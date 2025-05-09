import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <h1>Home Page</h1>

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/service'>Service</Link>
    </div>
  )
}

export default Home