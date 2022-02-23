import './AddUser.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" />

      <label htmlFor="age">Age (Years)</label>
      <input id="age" name="age" type="number" min="0" max="150" />

      <input type="submit" value="Add User" onClick={addUserHandler} />
    </form>
  )
}

export default AddUser;
