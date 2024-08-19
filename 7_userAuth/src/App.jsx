import AuthProvider from 'provider/AuthProvider';
import Router from './shared/Router'; // 직접 만든 Router를 사용

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
