import { AuthProvider } from 'context/AuthContext';
import { PostProvider } from 'context/PostContext';
import Router from 'shared/Router';

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <Router />
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
