import Post from './Post';
import { useFetch } from './useFetch';

const CustomHooks = () => {

  // destructure the custom hook
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  console.log(data, 'data')

  if(loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>Custom Hooks - useFetch</h3>
      <h3>List of Users</h3>
      {
        data && data.length > 0 ? (
          <ul>
            {
              data.map(user => (
                <li key={user.id}>
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </li>
              ))
            }
          </ul>
        ) : (
          <p>No users found</p>
        )
      }

      <Post />
    </>
  )
}

export default CustomHooks;