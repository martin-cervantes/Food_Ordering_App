import { useState } from 'react'
import './AddUser.css';

const AddUser = ({ saveUser }) => {
  const [age, setAge] = useState('')
  const [username, setUsername] = useState('')

  const ageHandler = ({ target }) => {
    setAge(target.value)
  }

  const usernameHandler = ({ target }) => {
    setUsername(target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault()
    saveUser({ username, age })
    setUsername('')
    setAge('')
  }

  return (
    <form className="card py-5 px-3 my-4">
      <h1>Users</h1>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        placeholder="Pito Perez"
        onChange={usernameHandler}
      />

      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        min="0"
        max="150"
        value={age}
        placeholder="150"
        onChange={ageHandler}
      />

      <input
        type="submit"
        value="Add"
        className="btn btn-primary"
        onClick={addUserHandler}
      />
    </form>
  )
}

export default AddUser
