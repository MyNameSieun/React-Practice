import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Home Page :)</h1>
      <button onClick={() => navigate(`/info`)}>정보 페이지로 이동</button>
    </div>
  );
};

export default HomePage;
