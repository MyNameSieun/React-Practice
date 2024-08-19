import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import infoData from "../info.json";
import styled from "styled-components";

const InfoPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // 쿼리 파라미터 상태

  // searchParams.get("search")을 초기 상태로 넣어주는 이유? 사용자가 페이지를 새로 고침하거나 URL을 직접 입력했을 때 검색 쿼리 파라미터를 기억하기 위함!
  const [query, setQuery] = useState(searchParams.get("search") || ""); // 검색 쿼리 상태
  const [filteredData, setFilteredData] = useState(infoData); // 필터링된 데이터 상태

  // 검색 버튼 클릭 시 검색어를 URL 쿼리 파라미터로 설정
  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const trimmedQuery = query.trim(); // 검색어의 공백 제거
    setSearchParams({ search: trimmedQuery }); // 쿼리 파라미터 업데이트
  };

  // 검색어가 변경될 때 필터링된 데이터 업데이트
  useEffect(() => {
    const trimmedQuery = searchParams.get("search")?.trim().toLowerCase() || "";
    if (trimmedQuery) {
      const result = infoData.filter(
        (info) =>
          info.title.toLowerCase().includes(trimmedQuery) ||
          info.content.toLowerCase().includes(trimmedQuery)
      );
      setFilteredData(result);
    } else {
      setFilteredData(infoData); // 검색어가 공백만 있는 경우 전체 데이터 표시
    }
  }, [searchParams]); // searchParams가 변경될 때마다 호출됨

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit">검색하기</button>
      </form>

      <h1>InfoPage</h1>

      {filteredData.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <ul>
          {filteredData.map((info) => (
            <StInfoList key={info.id}>
              <Link to={`/info/${info.id}`}>
                <li>{info.title}</li>
                <li>{info.content}</li>
              </Link>
            </StInfoList>
          ))}
        </ul>
      )}
    </>
  );
};

export default InfoPage;

const StInfoList = styled.ul`
  background-color: #b6b6b6;
  padding: 1rem;
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #a0a0a0;
  }
`;
