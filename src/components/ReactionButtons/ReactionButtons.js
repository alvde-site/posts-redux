import { useDispatch } from "react-redux";

import { reactionAdded } from "../../services/reducers/postsSlice";
import { initialReactions } from "../../utils/constants";

const reactionEmoji = {
  thumbsUp: "👍",
  thumbsDown: "👎",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactonButtons = ({ post }) => {
  const dispatch = useDispatch();
  const formattedPost = {...post, reactions: initialReactions};

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}>
        {emoji} {formattedPost.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
