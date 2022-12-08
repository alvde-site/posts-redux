import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, selectAllPosts } from "../../services/reducers/postsSlice";
import { PostAuthor } from "../PostAuthor/PostAuthor";
import { ReactonButtons } from "../ReactionButtons/ReactionButtons";

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if(postStatus === "idle") {
      dispatch(fetchPosts());
    } 
  }, [postStatus, dispatch]);

  const renderedPosts = posts.map((post) => (
    <article className="posts__excerpt" key={post.id}>
      <h3>{post.nameRU}</h3>
      <p className="posts__content">{post.description}</p>
      <PostAuthor
        userId={post.user}
        timestamp={post.created_at}
        dateTitle={post.dateTitle}
      />
      <Link to={`/posts/${post.id}`}>читать весь отзыв</Link>
      <ReactonButtons post={post} />
    </article>
  ));

  return (
    <section className="posts">
      <h2 className="posts__title">Отзывы</h2>
      {renderedPosts.reverse()}
    </section>
  );
};
