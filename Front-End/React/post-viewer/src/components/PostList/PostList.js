import Post from "./Post";

function PostList(props) {
    return (
        <article>
            {
                props.data.map(obj => <Post title={obj.title} description={obj.description} />)
            }
        </article>
    )
}

export default PostList;