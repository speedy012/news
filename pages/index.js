import React, { useState } from 'react';

import Articles from '../components/Articles';
import styles from '../styles/index.module.css';

const Index = () => {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (searchWord) => {
    setIsLoading(true);

    fetch(`/api/search?q=${searchWord}`)
      .then((response) => response.json())
      .then((response) => setArticles(response.articles))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const searchForArticles = (event) => {
    event.preventDefault();
    fetchData(search);
  };

  const clearSearch = () => {
    setSearch('');
    setArticles([]);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Newsorama</h1>

      <form className={styles.form} onSubmit={searchForArticles}>
        <label htmlFor="search">Search News Article:</label>

        <input
          id="search"
          name="search"
          type="text"
          placeholder="Coronavirus masks..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit" value="Submit">
          Search
        </button>
        <button type="reset" onClick={clearSearch}>
          Clear
        </button>
      </form>

      <Articles isLoading={isLoading} articles={articles} />
    </div>
  );
};

export default Index;
