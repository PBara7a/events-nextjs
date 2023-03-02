import { useState } from "react";
import NewComment from "./NewComment";

import styles from "./comments.module.css";
import CommentList from "./CommentList";

type Props = {
  eventId: string;
};

function Comments({ eventId }: Props) {
  const [showComments, setShowComments] = useState<boolean>(false);

  function toggleCommentsHandler(): void {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler() {
    // send data to API
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
