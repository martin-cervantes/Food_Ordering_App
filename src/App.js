import { useState } from 'react'
import AddUser from './Components/AddUser'
import UsersList from './Components/UsersList'

const App = () => {
  const [users, addUser] = useState([])

  const saveUser = (newUser) => {
    addUser([...users, newUser])
  }

  return (
    <div className="container">
        <AddUser saveUser={saveUser} />

        <UsersList users={users} />
    </div>
  )
}

export default App
