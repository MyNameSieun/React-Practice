const SearchList = ({ filteredData }) => {
  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((dummy) => (
          <ul key={dummy.id}>
            <li>{dummy.title}</li>
            <li>{dummy.content}</li>
          </ul>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchList;
