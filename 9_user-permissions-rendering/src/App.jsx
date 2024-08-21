import AuthProvider from './provider/authProvider';
import Router from 'shared/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
