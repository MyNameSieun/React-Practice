const SearchForm = ({ query, setQuery, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력하세요." />
      <button type="submit">검색하기</button>
    </form>
  );
};

export default SearchForm;
