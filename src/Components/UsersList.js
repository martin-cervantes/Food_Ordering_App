import User from './User'

const UsersList = ({ users }) => {
  if (users.length > 0)
    return <div className="card py-5 px-3 my-4">
        { users.map((user, index) => <User key={index} user={user} />) }
      </div>
  else
    return null
}

export default UsersList
