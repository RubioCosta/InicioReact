import './App.css';

import { useQuery } from 'react-query';

import { fetchPosts, fetchUsers } from './Services/Typecode';

function App() {

  const { data: users, isLoading } = useQuery('users', fetchUsers);
  const { data: posts } = useQuery('post', fetchPosts);
  
  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
    <ul>
      {users && users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <br />
    <ul>
      {posts && posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>
  );
}

export default App;
