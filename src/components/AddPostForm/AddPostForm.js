import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../../services/reducers/postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  const onSavePostClick = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
    setUserId("");
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))

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
        <label htmlFor="postAuthor">Автор отзыва:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
        </select>
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
          disabled={!canSave}
        >
          Сохранить отзыв
        </button>
      </form>
    </section>
  );
};
