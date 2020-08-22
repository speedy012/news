import React, { useState } from "react";
import Articles from "../components/Articles";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Index = () => {
  const [search, setSearch] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h2 className="title">
        {" "}
        <strong>Newsorama</strong>
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search News Article:
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <button type="submit" value="Submit" />
      </form>
      {isLoading ? <span>Loading</span> : <Articles articles={articles} />}
    </div>
  );
};

export default Index;
