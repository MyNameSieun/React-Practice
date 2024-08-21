import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import PropsDrilling from 'pages/PropsDrilling';
import Rtk from 'pages/Rtk';
import ReactQuery from 'pages/ReactQuery';
import JsonServer from 'pages/JsonServer';
import CreateAsyncThunk from 'pages/CreateAsyncThunk';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/props-drilling" element={<PropsDrilling />} />
        <Route path="/json-server" element={<JsonServer />} />
        <Route path="/create-async-thunk" element={<CreateAsyncThunk />} />
        <Route path="/rtk" element={<Rtk />} />
        <Route path="/react-query" element={<ReactQuery />} />

        {/* 사용자가 잘못된 경로로 이동했을 때 기본적으로 (/)로 리다이렉션 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
