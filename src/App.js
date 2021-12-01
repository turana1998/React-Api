import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'

import CharacterGrid from './components/characters/CharacterGrid'
import UserDetail from './components/User/UserDetail'
import PostDetail from './components/Post/PostDetail'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://jsonplaceholder.typicode.com/users`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (

    <>
      <Router>
        <div className='container'>
          {/* <Search getQuery={(q) => setQuery(q)} /> */}
          <Routes>
            <Route path="/postdetail" element={<PostDetail />} />
            <Route path="/user" element={<UserDetail />} />
            <Route path="/" element={<CharacterGrid isLoading={isLoading} items={items} />} />
          </Routes>
        </div>

      </Router>

    </>
  )
}

export default App
