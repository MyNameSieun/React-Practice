import { useNavigate, useParams } from "react-router-dom";
import infoData from "../info.json";
import NotFound from "./default-set/NotFound";

const InfoDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const findInfoDataId = infoData.find((info) => info.id === parseInt(id));

  if (!findInfoDataId) {
    return <NotFound />;
  }

  return (
    <main>
      <h1>InfoDetailPage</h1>
      <ul>
        <li>{findInfoDataId.title}</li>
        <li>{findInfoDataId.content}</li>
      </ul>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </main>
  );
};

export default InfoDetailPage;
