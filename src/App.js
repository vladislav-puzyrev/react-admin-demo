import React from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Admin, Resource } from 'react-admin'
import { UserList } from './users'
import { PostList, PostEdit, PostCreate } from './posts'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './Dashboard'
import authProvider from './authProvider'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>
)

export default App
