import { useFetch } from "./useFetch";
const Post = () => {

  // destructure the custom hook
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
      <h3>Posts</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* {
        data && data.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
            {
              data.map(post => (
                <div key={post.id} style={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '16px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <h4 style={{ 
                    margin: '0 0 12px 0', 
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {post.title}
                  </h4>
                  <p style={{ 
                    margin: '0', 
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    {post.body}
                  </p>
                  <div style={{
                    marginTop: '12px',
                    padding: '8px 12px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#888'
                  }}>
                    Post ID: {post.id} | User ID: {post.userId}
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <p>No posts found</p>
        )
      } */}
      {
        data && data.length > 0 ? (
          <ul>
            {
              data.map(post => (
                <li key={post.id}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </li>
              ))
            }
          </ul>
        ) : (
          <p>No posts found</p>
        )
      }
    </>
  )
}

export default Post;