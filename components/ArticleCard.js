import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

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
      <button className="article-card" onClick={openModal}>
        <div className="image">
          <img
            src={props.article.urlToImage}
            alt="oh no!"
            style={{ width: "100%" }}
          />
        </div>
        <div className="container">
          <div className="header"> {props.article.title}</div>
        </div>
        <div className="extra content"></div>
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>
          <span>{props.article.title}</span>
        </h2>
        <h4>Written By: {props.article.author}</h4>
        <p>{props.article.description}</p>
        <a href={props.article.url}>To Read The Full Article, Click Here!</a>
        <button className="modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default ArticleCard;
