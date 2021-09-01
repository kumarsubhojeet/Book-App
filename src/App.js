import React from 'react'
import Home from './Components/Home'

import {Switch , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'

import Search from './Components/Search';
import NewBooks from './Components/NewBooks'
import BookById from './Components/BookById.jsx'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/NewBooks' component={NewBooks} />
        <Route exact path='/BookById' component={BookById} />
      </Switch>
    </>
  )
}

export default App
