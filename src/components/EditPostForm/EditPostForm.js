import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { postUpdated, selectPostById } from "../../services/reducers/postsSlice";

export const EditPostForm = ({ match }) => {
  const {postId} = match.params;
  const post = useSelector(state => selectPostById(state, postId))
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section className="editpost">
      <h2 className="editpost__title">Редактировать отзыв</h2>
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
        <button
          type="button"
          className="postform__button"
          onClick={onSavePostClick}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
