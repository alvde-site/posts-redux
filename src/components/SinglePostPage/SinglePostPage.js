import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPostById } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, parseInt(postId)));

  if (!post) {
    return (
      <section>
        <h2>Отзыв не найдет по указанному id!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.nameRU}</h2>
        <p className="post-content">{post.description}</p>
        <PostAuthor userId={post.user} />
        <Link to={`/editPost/${post.id}`}>Редактировать отзыв</Link>
      </article>
    </section>
  );
};
