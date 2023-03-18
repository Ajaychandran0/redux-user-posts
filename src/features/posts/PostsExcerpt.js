import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import React from "react";

let PostsExcerpt = ({post}) => {
  return (
    <div>
      <article>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
              <Link to={`post/${post.id}`}> View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    </div>
  )
}
// this React.memo allows the component not to rerender if the prop it recieves does not change.
// so PostExcerpt only rerenders when the 'post' prop it recieves changes. 
PostsExcerpt = React.memo(PostsExcerpt)

export default PostsExcerpt
