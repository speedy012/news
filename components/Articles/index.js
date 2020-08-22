import ArticleCard from '../ArticleCard';
import React from 'react';
import styles from './Articles.module.css';

const Articles = ({ isLoading, articles }) => {
  return (
    <div className={styles.Articles}>
      {isLoading ? (
        <span className={styles.spinner}>Loading...</span>
      ) : (
        articles.map((article) => {
          return (
            <ArticleCard
              key={`${article.publishedAt}_${article.title}`}
              article={article}
            />
          );
        })
      )}
    </div>
  );
};

export default Articles;
