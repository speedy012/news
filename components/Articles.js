import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = (props) => {
  return (
    <div>
      <div className="articles-body">
        {props.articles === undefined
          ? null
          : props.articles.map((article) => {
              return (
                <ArticleCard
                  key={`${article.publishedAt}_${article.title}`}
                  article={article}
                  removeArticle={props.removeArticle}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Articles;
