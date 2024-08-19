import React, { useContext } from 'react';
import { SearchContext } from 'context/SearchContext';
import SearchForm from './SearchForm';
import SearchList from './SearchList';

const Search = () => {
  const { query, setQuery, handleSubmit, filteredData } = useContext(SearchContext);

  return (
    <>
      <SearchForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <SearchList filteredData={filteredData} />
    </>
  );
};

export default Search;
