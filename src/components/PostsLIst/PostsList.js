import { useSelector } from "react-redux";

export const PostsList = () => {
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <article className="posts__excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="posts__content">{post.content.substring(0,100)}</p>
        </article>
    ))

    return <section className="posts">
        <h2>Комментарии</h2>
        {renderedPosts}
    </section>
}

