import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>
        <Link to="/props-drilling">props-drilling</Link>
      </div>
      <div>
        <Link to="/json-server">json-server</Link>
      </div>
      <div>
        <Link to="/create-async-thunk">create-async-thunk</Link>
      </div>
      <div>
        <Link to="/rtk">rtk</Link>
      </div>
      <div>
        <Link to="/react-query">react-query</Link>
      </div>
    </>
  );
};

export default HomePage;
