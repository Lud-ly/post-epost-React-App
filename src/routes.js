import React, { Component } from 'react'
import {Router , Route , Link , browserHistory, IndexRoute} from 'react-router'
import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import UsersList from './containers/usersList'
import PageNotFound from './components/page-not-found'

 class Routes extends Component {
     render () {
         return (
             <div>
                 <Router history={browserHistory}>
                     <Route path="/"component={PostList}/>
                     <Route path="create-post"component={PostForm}/>
                     <Route path="post/:id"component={Post}/>
                     <Route path="users-list"component={UsersList}/>
                     <Route path="*"component={PageNotFound}/>
                 </Router>
             </div>
         )
     }
 }
 export default Routes