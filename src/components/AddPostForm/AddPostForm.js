import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "../../services/reducers/postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(
        postAdded(
          title,
          content
        )
      );
    }

    setTitle("");
    setContent("");
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section className="addpost">
      <h2 className="addpost__title">Оставить отзыв</h2>
      <form className="postform">
        <label htmlFor="postTitle" className="postform__item">
          Заголовок отзыва:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="postform__item"
        />
        <label htmlFor="postContent" className="postform__item">
          Описание:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          className="postform__item"
        />
        <button type="button" className="postform__button" onClick={onSavePostClick}>
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
