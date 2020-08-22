import React, { useState } from 'react';

import Modal from 'react-modal';
import styles from './ArticleCard.module.css';

Modal.setAppElement('#__next');

const ArticleCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.ArticleCard} onClick={openModal}>
        <div>
          <img
            src={props.article.urlToImage}
            alt="oh no!"
            style={{ width: '100%' }}
          />
        </div>

        <h3>{props.article.title}</h3>
      </button>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div className={styles.modal}>
          <h2>{props.article.title}</h2>

          <h4>Written By: {props.article.author}</h4>

          <p>{props.article.description}</p>

          <a href={props.article.url}>To Read The Full Article, Click Here!</a>

          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default ArticleCard;
