import React from 'react'
import { Link} from 'react-router-dom'
const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>Hover Me</h1>
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.address.street}</p>
          <p>{item.phone}</p>
          <Link to="/user"><button>Detail</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
