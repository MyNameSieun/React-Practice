import Navbar from 'components/layouts/Navbar';
import { Outlet } from 'react-router-dom';

const UserProfilePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserProfilePage;
