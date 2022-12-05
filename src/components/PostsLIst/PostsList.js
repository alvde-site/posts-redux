import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "../PostAuthor/PostAuthor";
import { ReactonButtons } from "../ReactionButtons/ReactionButtons";

export const PostsList = () => {
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <article className="posts__excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="posts__content">{post.content.substring(0,100)}</p>
            <PostAuthor userId={post.user} timestamp={post.date} dateTitle={post.dateTitle}/>
            <Link to={`/posts/${post.id}`}>читать весь отзыв</Link>
            <ReactonButtons post={post}/>
        </article>
    ))

    return <section className="posts">
        <h2 className="posts__title">Отзывы</h2>
        {renderedPosts.reverse()}
    </section>
}

