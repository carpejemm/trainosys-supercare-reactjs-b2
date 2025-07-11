import EditProfile from "./EditProfile"
// import UserContext from "../../contexts/UserContext"

const UserProfile = () => {
  return (
    <>
    <div style={{ backgroundColor: 'lightyellow', padding: '10px', textAlign: 'center', color: 'black' }}>
      <p>User Profile</p>
      <EditProfile />
      {/* <UserContext.Consumer>
        {({ user }) => (
          <>
            <p>Current User: {user.fullName}</p>
            <p>Current Email: {user.email}</p>
          </>
        )}
      </UserContext.Consumer> */}
    </div>
      
    </>
  )
}

export default UserProfile