import React from 'react'
import UserLists from './UserLists'
import PostLists from './PostLists'
import Home from './Home'
import UserShow from './UserShow'
import PostShow from './PostShow'

import {Link, BrowserRouter, Route} from 'react-router-dom'

function App(props){
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/posts">Posts</Link>

        <Route path='/' component={Home} exact={true} />
        <Route path='/users' component={UserLists} exact={true}/>
        <Route path='/posts' component={PostLists} exact={true}/>
        <Route path='/users/:id' component={UserShow} /> 
        <Route path='/posts/:id' component={PostShow} />
      </div>
    </BrowserRouter>
  );
}

export default App