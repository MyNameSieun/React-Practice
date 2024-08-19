import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dummyData from 'dummy.json';

// Context 생성
export const SearchContext = createContext();

// Context Provider
export const SearchContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams(); // 쿼리 파라미터 상태
  const [query, setQuery] = useState(searchParams.get('search') || ''); // 검색 쿼리 상태
  const [filteredData, setFilteredData] = useState(dummyData); // 필터링된 데이터 상태

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const trimmedQuery = query.trim(); // 검색어의 공백 제거
    setSearchParams({ search: trimmedQuery }); // 쿼리 파라미터 업데이트
  };

  // 검색어가 변경될 때 필터링된 데이터 업데이트
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const toLowerCaseParams = searchParam ? searchParam.toLowerCase() : '';

    if (toLowerCaseParams) {
      const filteredDummy = dummyData.filter(
        (dummy) =>
          dummy.title.toLowerCase().includes(toLowerCaseParams) ||
          dummy.content.toLowerCase().includes(toLowerCaseParams)
      );
      setFilteredData(filteredDummy);
    } else {
      setFilteredData(dummyData); // 검색어가 공백만 있는 경우 전체 데이터 표시
    }
  }, [searchParams]);

  return (
    <SearchContext.Provider value={{ query, setQuery, handleSubmit, filteredData }}>{children}</SearchContext.Provider>
  );
};
