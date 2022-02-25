const User = ({ user }) => {
  const { username, age } = user

  return <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">Username: {username}</h5>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
}

export default User
