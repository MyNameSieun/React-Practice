import { PostContextProvider } from 'context/PostsContext';
import Router from './shared/Router';

const App = () => {
  return (
    <PostContextProvider>
      <Router />
    </PostContextProvider>
  );
};

export default App;
